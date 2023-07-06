import path from "node:path";
import axios from 'axios';
// import { getSteamUsers, writeGames, getGames } from "../db/sequelizeDbLayer"; // getImportedSteamGameIds, writeImportedSteamGameIds,
import { formatNewGameNumPlayersMessage } from "../messageFormatter";
import { getTagsFromMessage, getNumPlayersFromId } from "../textHelpers/textParsing";
import { gameToString } from "../textHelpers/textFormatting";
import { handleCollectorError } from "../errorHandling/replyTimeout";
import { Collection, Message, SlashCommandBuilder } from "discord.js";
import { Snowflake } from "discord-api-types/globals";
import { CommandDto } from "models/commandDto";
import { Game } from "models/game";
import { insertGame } from "../db/sequelizeDbLayer";


const USER_ARG_KEY = "user";
const BUTTON_COMPONENT_TYPE = 2;
const INPUT_TIMEOUT_MILLISECONDS = 45 * 1000;



export default {
  data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".ts"))
    .setDescription("Help Jigsaw learn more games from a Steam library!")
    .addUserOption(option =>
      option.setName(USER_ARG_KEY)
        .setDescription("User's library to import")
        .setRequired(true)),


  async execute(interaction) {
    // const user = interaction.options.getUser(USER_ARG_KEY);

    // const steamUsers = await getSteamUsers();
    // const steamUser = steamUsers.find(steamUser => steamUser.discordId === user.id);
    // if (typeof steamUser === "undefined") {
    //   interaction.reply(`User ${user.username} has not registered their Steam Id!`);
    //   return;
    // }
    // interaction.reply("Validated user, compiling game list...");

    // const ownedGamesResponse = await axios
    //   .get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${steamUser.steamId}&format=json`);

    // const ownedGameIds = ownedGamesResponse.data.response.games.map(game => game.appid);
    // const importedSteamGameIds:string[] = [];// await getImportedSteamGameIds();
    // for (const gameId of ownedGameIds) {
    //   if (importedSteamGameIds.includes(gameId)) {
    //     console.log(`Skipping game id '${gameId}', already imported`)
    //     continue;
    //   }

    //   const steamGameDetailResponse = await axios.get(`https://store.steampowered.com/api/appdetails?key=${process.env.STEAM_API_KEY}&appids=${gameId}`);

    //   const gameIdKey = Object.keys(steamGameDetailResponse.data)[0];

    //   const dataForGame = steamGameDetailResponse.data[gameIdKey];
    //   if (!dataForGame || !dataForGame.data) {
    //     //GRID, id 12750, is broken on steam
    //     interaction.followUp(`Unable to retrieve data for game id ${gameIdKey}, retrieve the details yourself with this link: https://store.steampowered.com/app/${gameIdKey}`);
    //     continue;
    //   }

    //   const gameName = dataForGame.data.name;
    //   const steamProvidedGameTags = dataForGame.data.genres.map(genre => genre.description);

    //   // begin wizard
    //   // verify game name
    //   const games = await getGames();
    //   if (games.some(game => game.name.toLowerCase() === gameName.toLowerCase())) {
    //     //interaction.followUp(`${gameName} already added, skipping`);
    //     console.log(`${gameName} already added, skipping`);
    //     importedSteamGameIds.push(gameId);
    //     // writeImportedSteamGameIds(importedSteamGameIds);
    //     continue;
    //   }

    //   //request number of players, #1
    //   let playerRange:number[] = [];
    //   const sentPlayersMessage = await interaction.followUp(formatNewGameNumPlayersMessage(gameName, true));

    //   const sentPlayersMessageFilter = i => i.user.id === interaction.user.id;
    //   try {
    //     const firstPlayerRangeButtonClicked = await sentPlayersMessage.awaitMessageComponent({ sentPlayersMessageFilter, componentType: BUTTON_COMPONENT_TYPE, time: INPUT_TIMEOUT_MILLISECONDS, max: 1, errors: ["time"] });
    //     firstPlayerRangeButtonClicked.deferUpdate();

    //     const buttonId = firstPlayerRangeButtonClicked.customId;
    //     if (buttonId === "skipGame") {
    //       continue;
    //     } else if (buttonId === "end") {
    //       sentPlayersMessage.reply("Steam import session aborted!");
    //       return;
    //     }
    //     const numPlayersClick = getNumPlayersFromId(buttonId);
    //     playerRange.push(numPlayersClick);

    //     await sentPlayersMessage.edit(formatNewGameNumPlayersMessage(gameName, true, playerRange));

    //   } catch (ex) {
    //     handleCollectorError(ex, sentPlayersMessage);
    //     return;
    //   }

    //   //request number of players, #2
    //   try {
    //     const secondPlayerRangeButtonClicked = await sentPlayersMessage.awaitMessageComponent({ sentPlayersMessageFilter, componentType: BUTTON_COMPONENT_TYPE, time: INPUT_TIMEOUT_MILLISECONDS, max: 1, errors: ["time"] });
    //     secondPlayerRangeButtonClicked.deferUpdate();

    //     const buttonId = secondPlayerRangeButtonClicked.customId;
    //     if (buttonId === "skipGame") {
    //       continue;
    //     } else if (buttonId === "end") {
    //       sentPlayersMessage.reply("Steam import session aborted!");
    //       return;
    //     }

    //     const numPlayersClick = getNumPlayersFromId(buttonId);
    //     playerRange.push(numPlayersClick);
    //     playerRange = playerRange.sort();
    //     await sentPlayersMessage.edit(formatNewGameNumPlayersMessage(gameName, true, playerRange));
    //   } catch (ex) {
    //     //function this
    //     handleCollectorError(ex, sentPlayersMessage);
    //     return;
    //   }

    //   const bounds = { lowerBound: playerRange[0], upperBound: playerRange[1] };

    //   //tags
    //   const tagsRequestMessage = await sentPlayersMessage.reply(`'${gameName}' player range ${bounds.lowerBound} - ${bounds.upperBound} entered. What tags should be added to the Steam tags (${steamProvidedGameTags.join(', ')})? ex: example1, example2, etc. Or, type Cancel`);

    //   let tags:string[] = [];
    //   let tagsMessage:Message<boolean> | undefined;
    //   const tagResponseFilter = m => interaction.user.id === m.author.id;
    //   try {
    //     const tagMessages:Collection<Snowflake, Message> = await interaction.channel.awaitMessages({ tagResponseFilter, time: INPUT_TIMEOUT_MILLISECONDS, max: 1, errors: ["time"] });

    //     tagsMessage = tagMessages.first();
    //     console.log(tagsMessage);

    //     if (tagsMessage?.content?.toLowerCase() === "cancel") {
    //       tagsMessage.reply("Steam import session aborted!");
    //       return;
    //     }

    //     const inputTags = getTagsFromMessage(tagsMessage).sort((a, b) => a.localeCompare(b));
    //     const allPotentialTags = steamProvidedGameTags.concat(inputTags);
    //     for (const potentialTag of allPotentialTags) {
    //       if (!tags.some(tagToAdd => tagToAdd.toLowerCase() === potentialTag.toLowerCase())) {
    //         tags.push(potentialTag);
    //       }
    //     }
    //   } catch (ex) {
    //     handleCollectorError(ex, tagsMessage);
    //     return;
    //   }

    //   //write
    //   const gameCreationAttributes:GameCreationAttributes = {
    //     name: gameName,
    //     lowerPlayerBound: bounds.lowerBound,
    //     upperPlayerBound: bounds.upperBound,
    //     // tags: tags
    //   }

    //   // games.push(game);
    //   let game:IGame;
    //   game = await insertGame(gameCreationAttributes);

    //   if (tagsMessage) {
    //     await tagsMessage.reply(`Successfully saved ${gameToString(game)}`);
    //   }

    //   importedSteamGameIds.push(gameId);
    //   // writeImportedSteamGameIds(importedSteamGameIds);
    // };
  }


};
