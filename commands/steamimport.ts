import path from "node:path";
import axios from 'axios';
import { findOrCreateTags, getGames, getImportedSteamGames, getSteamUserPlatformMappingByDiscordId, mapGameToSteamUser } from "../db/sequelizeDbLayer"; // getImportedSteamGameIds, writeImportedSteamGameIds,
import { formatNewGameNumPlayersMessage } from "../messageFormatter";
import { getTagsFromMessage, getNumPlayersFromId } from "../textHelpers/textParsing";
import { gameToString } from "../textHelpers/textFormatting";
import { handleSteamImportCollectorError } from "../errorHandling/replyTimeout";
import { Message, SlashCommandBuilder } from "discord.js";
import { insertGame } from "../db/sequelizeDbLayer";
import { Game, Tag, UserPlatformMapping } from "../models/models";


const USER_ARG_KEY = "user";
const STEAM_GAME_ID_KEY = "steam_id"
const BUTTON_COMPONENT_TYPE = 2;
const INPUT_TIMEOUT_MILLISECONDS = 45 * 1000;



export default {
  data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".ts"))
    .setDescription("Help Jigsaw learn more games from a Steam library!")
    .addUserOption(option =>
      option.setName(USER_ARG_KEY)
        .setDescription("User's library to import")
        .setRequired(true))
    .addIntegerOption(option =>
      option.setName(STEAM_GAME_ID_KEY)
        .setDescription("A steam game id to fast forward to in the import process")),


  async execute(interaction) {
    const user = interaction.options.getUser(USER_ARG_KEY);
    let checkpointGameId = interaction.options.getInteger(STEAM_GAME_ID_KEY);

    let steamUserPlatformMapping:UserPlatformMapping;
    try {
      steamUserPlatformMapping = await getSteamUserPlatformMappingByDiscordId(user.id);
    } catch (error) {
      interaction.reply(`User ${user.username} has not registered their Steam Id!`);
      return;
    }
    
    interaction.reply("Validated user, compiling game list...");

    const ownedGamesResponse = await axios
      .get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${steamUserPlatformMapping.steamId}&format=json`);

    const steamOwnedGameIds = ownedGamesResponse.data.response.games.map(game => game.appid);
    const importedSteamGames:Game[] = await getImportedSteamGames();
    for (const gameId of steamOwnedGameIds) {

      if (checkpointGameId !== null) {
        if (gameId === checkpointGameId) {
          checkpointGameId = null;
        } else {
          console.log(`Game ${gameId} !== ${checkpointGameId} checkpointGameId, continuing`);
          continue;
        }

      }

      const importedSteamGame = importedSteamGames.find(game => game.steamId === gameId);
      if (typeof importedSteamGame !== "undefined") {
        //confirm game assignment
        console.log(`Game id '${gameId}', already imported, assigning to User`);
        await mapGameToSteamUser(importedSteamGame, steamUserPlatformMapping);
        continue;
      }

      const steamGameDetailResponse = await axios.get(`https://store.steampowered.com/api/appdetails?key=${process.env.STEAM_API_KEY}&appids=${gameId}`);

      const gameIdKey = Object.keys(steamGameDetailResponse.data)[0];

      const dataForGame = steamGameDetailResponse.data[gameIdKey];
      if (!dataForGame || !dataForGame.data) {
        //GRID, id 12750, is broken on steam
        interaction.followUp(`Unable to retrieve data for game id ${gameIdKey}, retrieve the details yourself with this link: https://store.steampowered.com/app/${gameIdKey}`);
        continue;
      }

      const gameName = dataForGame.data.name;
      const steamProvidedGameTags = dataForGame.data.genres.map(genre => genre.description);

      // begin wizard
      // assign steam info to existing game?
      //request number of players, #1
      let playerRange:number[] = [];
      const sentPlayersMessage = await interaction.followUp(formatNewGameNumPlayersMessage(gameName, true));

      const sentPlayersMessageFilter = i => i.user.id === interaction.user.id;
      try {
        const firstPlayerRangeButtonClicked = await sentPlayersMessage.awaitMessageComponent({ sentPlayersMessageFilter, componentType: BUTTON_COMPONENT_TYPE, time: INPUT_TIMEOUT_MILLISECONDS, max: 1, errors: ["time"] });
        firstPlayerRangeButtonClicked.deferUpdate();

        const buttonId = firstPlayerRangeButtonClicked.customId;
        if (buttonId === "skipGame") {
          continue;
        } else if (buttonId === "end") {
          sentPlayersMessage.reply(`Steam import session aborted! Provide id '${gameId}' to the gameId option of steamimport to pickup where you left off.`);
          return;
        }
        const numPlayersClick = getNumPlayersFromId(buttonId);
        playerRange.push(numPlayersClick);

        await sentPlayersMessage.edit(formatNewGameNumPlayersMessage(gameName, true, playerRange));

      } catch (ex) {
        handleSteamImportCollectorError(ex, sentPlayersMessage, gameId);
        return;
      }

      //request number of players, #2
      try {
        const secondPlayerRangeButtonClicked = await sentPlayersMessage.awaitMessageComponent({ sentPlayersMessageFilter, componentType: BUTTON_COMPONENT_TYPE, time: INPUT_TIMEOUT_MILLISECONDS, max: 1, errors: ["time"] });
        secondPlayerRangeButtonClicked.deferUpdate();

        const buttonId = secondPlayerRangeButtonClicked.customId;
        if (buttonId === "skipGame") {
          continue;
        } else if (buttonId === "end") {
          sentPlayersMessage.reply(`Steam import session aborted! Provide id '${gameId}' to the gameId option of steamimport to pickup where you left off.`);
          return;
        }

        const numPlayersClick = getNumPlayersFromId(buttonId);
        playerRange.push(numPlayersClick);
        playerRange = playerRange.sort((a, b) => a - b);
        await sentPlayersMessage.edit(formatNewGameNumPlayersMessage(gameName, true, playerRange));
      } catch (ex) {
        handleSteamImportCollectorError(ex, sentPlayersMessage, gameId);
        return;
      }

      const lowerPlayerBound = playerRange[0];
      const upperPlayerBound = playerRange[1];

      //tags
      const tagsRequestMessage = await sentPlayersMessage.reply(`'${gameName}' player range ${lowerPlayerBound} - ${upperPlayerBound} entered. What tags should be added to the Steam tags (${steamProvidedGameTags.join(', ')})? ex: example1, example2, etc. Or, type 'None' or 'Cancel'`);

      let tags:Tag[] = [];
      let tagsMessage:Message<boolean> | undefined;
      const tagResponseFilter = m => interaction.user.id === m.author.id;
      try {
        const tagMessages = await interaction.channel.awaitMessages({ tagResponseFilter, time: INPUT_TIMEOUT_MILLISECONDS, max: 1, errors: ["time"] });
        console.log(tagMessages);
        tagsMessage = tagMessages.first();

        if (tagsMessage?.content?.toLowerCase() === "none") {

        } else if (tagsMessage?.content?.toLowerCase() === "cancel") {
          tagsMessage.reply(`Steam import session aborted! Provide id '${gameId}' to the gameId option of steamimport to pickup where you left off.`);
          return;
        }

        const inputTags:string[] = getTagsFromMessage(tagsMessage).sort((a, b) => a.localeCompare(b));
        const allPotentialTags:string[] = steamProvidedGameTags.concat(inputTags);
        for (const potentialTag of allPotentialTags) {
          if (!tags.some(tagToAdd => tagToAdd.name.toLowerCase() === potentialTag.toLowerCase())) {
            tags.push(Tag.build({ name: potentialTag }));
          }
        }
      } catch (ex) {
        handleSteamImportCollectorError(ex, sentPlayersMessage, gameId);
        return;
      }

      tags = await findOrCreateTags(tags);
      const newGame:Game = Game.build({
        name: gameName,
        lowerPlayerBound: lowerPlayerBound,
        upperPlayerBound: upperPlayerBound,
        steamId: gameId
      });

      const game = await insertGame(newGame, tags);
      await mapGameToSteamUser(game, steamUserPlatformMapping);

      if (tagsMessage) {
        await tagsMessage.reply(`Successfully saved ${gameToString(game)}`);
      }

      importedSteamGames.push(game);
    };
  }
};
