import path from "node:path";
import axios from 'axios';
import { findOrCreateTags, getImportedSteamGames, getSteamUserPlatformMappingByDiscordId, mapGameToSteamUser } from "../db/sequelizeDbLayer"; // getImportedSteamGameIds, writeImportedSteamGameIds,
import { formatNewGameNumPlayersMessage } from "../messageFormatter";
import { getTagsFromMessage, getNumPlayersFromId } from "../textHelpers/textParsing";
import { handleSteamImportCollectorError } from "../errorHandling/replyTimeout";
import { ChatInputCommandInteraction, Message, MessageFlags, SlashCommandBuilder } from "discord.js";
import { insertGame } from "../db/sequelizeDbLayer";
import { Game, Tag, UserPlatformMapping } from "../models/models";
import { Command, ICommand } from "../types/command";

const COMMAND_NAME = path.basename(__filename, ".ts");
const COMMAND_DESCRIPTION = "Help Jigsaw learn more games from a Steam library!";
const USER_ARG_KEY = "user";
const USER_DESCRIPTION = "User's Steam library to import";
const STEAM_GAME_ID_KEY = "steam_id";
const STEAM_GAME_ID_DESCRIPTION = "A Steam game id to fast forward to in the import process";

const INPUT_TIMEOUT_MILLISECONDS = 45 * 1000;

class SteamImportCommand extends Command implements ICommand {
  helpText: string = `${COMMAND_NAME} - ${COMMAND_DESCRIPTION}
  Args:
  ${USER_ARG_KEY} (required): ${USER_DESCRIPTION}
  ${STEAM_GAME_ID_KEY}: ${STEAM_GAME_ID_DESCRIPTION}`;


  data: Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup"> = new SlashCommandBuilder()
    .setName(COMMAND_NAME)
    .setDescription(COMMAND_DESCRIPTION)
    .addUserOption(option =>
      option.setName(USER_ARG_KEY)
        .setDescription(USER_DESCRIPTION)
        .setRequired(true))
    .addIntegerOption(option =>
      option.setName(STEAM_GAME_ID_KEY)
        .setDescription(STEAM_GAME_ID_DESCRIPTION));


  execute = async (interaction: ChatInputCommandInteraction) => {
    if (interaction === null || interaction.channel === null) {
      throw Error("literally impossible");
    }

    const user = interaction.options.getUser(USER_ARG_KEY, true);
    let checkpointGameId = interaction.options.getInteger(STEAM_GAME_ID_KEY);

    let steamUserPlatformMapping: UserPlatformMapping;
    try {
      steamUserPlatformMapping = await getSteamUserPlatformMappingByDiscordId(user.id);
    } catch (error) {
      interaction.reply({content: `User ${user.username} has not registered their Steam Id!`, options: { flags: MessageFlags.Ephemeral }});
      return;
    }
    
    interaction.reply({ content: "Validated user, compiling game list...", options: { flags: MessageFlags.Ephemeral }});

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
        // GRID, id 12750, is broken on steam
        interaction.followUp({ content: `Unable to retrieve data for game id ${gameIdKey}, retrieve the details yourself with this link: https://store.steampowered.com/app/${gameIdKey}`, ephemeral: true});
        continue;
      }

      const gameName = dataForGame.data.name;
      const steamProvidedGameTags = dataForGame.data.genres.map(genre => genre.description);

      // begin wizard
      // assign steam info to existing game?
      // request number of players, #1
      let playerRange:number[] = [];
      const sentPlayersMessage = await interaction.followUp({ ...formatNewGameNumPlayersMessage(gameName, true), ephemeral: true });

      const sentPlayersMessageFilter = i => i.user.id === interaction.user.id;
      try {
        const firstPlayerRangeButtonClicked = await sentPlayersMessage.awaitMessageComponent({ filter: sentPlayersMessageFilter, time: INPUT_TIMEOUT_MILLISECONDS });
        firstPlayerRangeButtonClicked.deferUpdate();

        const buttonId = firstPlayerRangeButtonClicked.customId;
        if (buttonId === "skipGame") {
          continue;
        } else if (buttonId === "end") {
          sentPlayersMessage.edit(`Steam import session aborted! Provide id '${gameId}' to the gameId option of steamimport to pickup where you left off.`);
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
        const secondPlayerRangeButtonClicked = await sentPlayersMessage.awaitMessageComponent({ filter: sentPlayersMessageFilter, time: INPUT_TIMEOUT_MILLISECONDS });
        secondPlayerRangeButtonClicked.deferUpdate();

        const buttonId = secondPlayerRangeButtonClicked.customId;
        if (buttonId === "skipGame") {
          continue;
        } else if (buttonId === "end") {
          sentPlayersMessage.edit({ content: `Steam import session aborted! Provide id '${gameId}' to the gameId option of steamimport to pickup where you left off.`});
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
      const tagsRequestMessage = await sentPlayersMessage.reply({ content: `'${gameName}' player range ${lowerPlayerBound} - ${upperPlayerBound} entered. What tags should be added to the Steam tags (${steamProvidedGameTags.join(', ')})? ex: example1, example2, etc. Or, type 'None' or 'Cancel'`, options: { flags: MessageFlags.Ephemeral }});

      let tags:Tag[] = [];
      let tagsMessage:Message<boolean> | undefined;
      const tagResponseFilter = m => interaction.user.id === m.author.id;
      try {
        const tagMessages = await interaction.channel.awaitMessages({ filter: tagResponseFilter, time: INPUT_TIMEOUT_MILLISECONDS, max: 1, errors: ['time'] });
        console.log(tagMessages);
        tagsMessage = tagMessages.first();

        if (tagsMessage?.content?.toLowerCase() === "none") {

        } else if (tagsMessage?.content?.toLowerCase() === "cancel") {
          tagsMessage.reply({ content: `Steam import session aborted! Provide id '${gameId}' to the gameId option of steamimport to pickup where you left off.`, options: { flags: MessageFlags.Ephemeral }});
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
        await tagsMessage.reply({ content: `Successfully saved ${game.toString()}`, options: { flags: MessageFlags.Ephemeral }});
      }

      importedSteamGames.push(game);
    };
  }
}

export default new SteamImportCommand();