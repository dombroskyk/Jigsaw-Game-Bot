import path from "node:path";
import axios, { AxiosResponse } from 'axios';
import { findOrCreateTags, getImportedSteamGames, getSteamUserPlatformMappingByDiscordId, mapGameToSteamUser } from "../db/sequelizeDbLayer"; // getImportedSteamGameIds, writeImportedSteamGameIds,
import { formatNewGameNumPlayersMessage } from "../messageFormatter";
import { getTagsFromMessage, getNumPlayersFromId } from "../textHelpers/textParsing";
import { handleSteamImportCollectorError } from "../errorHandling/replyTimeout";
import { ChatInputCommandInteraction, Message, MessageFlags, MessagePayload, MessageReplyOptions, SlashCommandBuilder } from "discord.js";
import { insertGame } from "../db/sequelizeDbLayer";
import { Game, Tag, UserPlatformMapping } from "../db/models/models";
import { Command, ICommand } from "../types/command";
import { axiosExceptionHandling, basicExceptionHandling } from "../errorHandling/exceptionMessage";

const COMMAND_NAME = path.basename(__filename, ".ts");
const COMMAND_DESCRIPTION = "Help Jigsaw learn more games from a Steam library!";
const USER_ARG_KEY = "user";
const USER_DESCRIPTION = "User's Steam library to import";
const STEAM_GAME_ID_KEY = "steam_id";
const STEAM_GAME_ID_DESCRIPTION = "A Steam game id to fast forward to in the import process";
const BASIC_IMPORT_KEY = "basic_import";
const BASIC_IMPORT_DESCRIPTION = "Quickly add all the games in a Steam library by assigning default values. Games can be edited later."

const INPUT_TIMEOUT_MILLISECONDS = 45 * 1000;
const MAX_DISCORD_MESSAGE_LENGTH = 2000;

class SteamImportCommand extends Command implements ICommand {
  helpText: string = `${COMMAND_NAME} - ${COMMAND_DESCRIPTION}
  Args:
  ${USER_ARG_KEY} (required): ${USER_DESCRIPTION}
  ${STEAM_GAME_ID_KEY}: ${STEAM_GAME_ID_DESCRIPTION}
  ${BASIC_IMPORT_KEY}: ${BASIC_IMPORT_DESCRIPTION}`;


  data: Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup"> = new SlashCommandBuilder()
    .setName(COMMAND_NAME)
    .setDescription(COMMAND_DESCRIPTION)
    .addUserOption(option =>
      option.setName(USER_ARG_KEY)
        .setDescription(USER_DESCRIPTION)
        .setRequired(true))
    .addIntegerOption(option =>
      option.setName(STEAM_GAME_ID_KEY)
        .setDescription(STEAM_GAME_ID_DESCRIPTION))
    .addBooleanOption(option =>
      option.setName(BASIC_IMPORT_KEY)
        .setDescription(BASIC_IMPORT_DESCRIPTION));


  execute = async (interaction: ChatInputCommandInteraction) => {
    if (interaction === null || interaction.channel === null) {
      throw Error("literally impossible");
    }

    const user = interaction.options.getUser(USER_ARG_KEY, true);
    let checkpointGameId = interaction.options.getInteger(STEAM_GAME_ID_KEY);
    const basicImportFlag = interaction.options.getBoolean(BASIC_IMPORT_KEY) ?? false;

    let steamUserPlatformMapping: UserPlatformMapping;
    try {
      steamUserPlatformMapping = await getSteamUserPlatformMappingByDiscordId(user.id);
    } catch (error) {
      await interaction.reply({content: `User ${user.username} has not registered their Steam Id!`, ephemeral: true });
      return;
    }
    
    await interaction.reply({ content: "Validated user, compiling game list...", ephemeral: true });

    let ownedGamesResponse: AxiosResponse<any, any>;
    try {
      ownedGamesResponse = await axios
        .get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${steamUserPlatformMapping.steamId}&format=json`);
    } catch (ex) {
      let message = basicExceptionHandling(ex);
      message = axiosExceptionHandling(ex);
      
      await interaction.followUp({ content: message, ephemeral: true });
      return;
    }

    const steamOwnedGameIds = ownedGamesResponse.data.response.games.map(game => game.appid);
    const importedSteamGames: Game[] = await getImportedSteamGames();
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

      let steamGameDetailResponse: AxiosResponse<any, any> 
      try {
        steamGameDetailResponse = await axios.get(`https://store.steampowered.com/api/appdetails?key=${process.env.STEAM_API_KEY}&appids=${gameId}`);
      } catch (ex) {

        return;
      }
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
      let playerRange: number[] = [];
      let tags: Tag[] = [];
      let lowerPlayerBound = 1;
      let upperPlayerBound: number | null = null;
      let messageToReply: Message | undefined;
      if (basicImportFlag) {
        for (const potentialTag of steamProvidedGameTags) {
          if (!tags.some(tagToAdd => tagToAdd.name.toLowerCase() === potentialTag.toLowerCase())) {
            tags.push(Tag.build({ name: potentialTag }));
          }
        }
      } else {
        const sentPlayersMessage = await interaction.followUp({ ...formatNewGameNumPlayersMessage(gameName, true), ephemeral: true });
        messageToReply = sentPlayersMessage;

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
        
        lowerPlayerBound = playerRange[0];
        upperPlayerBound = playerRange[1];

        //tags
        const tagsRequestMessage = await sentPlayersMessage.reply({ content: `'${gameName}' player range ${lowerPlayerBound} - ${upperPlayerBound} entered. What tags should be added to the Steam tags (${steamProvidedGameTags.join(', ')})? ex: example1, example2, etc. Or, type 'None' or 'Cancel'`, options: { flags: MessageFlags.Ephemeral }});
        messageToReply = tagsRequestMessage;

        let tagsMessage: Message<boolean> | undefined;
        try {
          const tagResponseFilter = m => interaction.user.id === m.author.id;
          const tagMessages = await interaction.channel.awaitMessages({ filter: tagResponseFilter, time: INPUT_TIMEOUT_MILLISECONDS, max: 1, errors: ['time'] });
          tagsMessage = tagMessages.first();
          messageToReply = tagsRequestMessage;

          if (tagsMessage?.content?.toLowerCase() === "none") {

          } else if (tagsMessage?.content?.toLowerCase() === "cancel") {
            tagsMessage.reply({ content: `Steam import session aborted! Provide id '${gameId}' to the gameId option of steamimport to pickup where you left off.`, options: { flags: MessageFlags.Ephemeral }});
            return;
          }

          const inputTags: string[] = getTagsFromMessage(tagsMessage).sort((a, b) => a.localeCompare(b));
          const allPotentialTags: string[] = steamProvidedGameTags.concat(inputTags);
          for (const potentialTag of allPotentialTags) {
            if (!tags.some(tagToAdd => tagToAdd.name.toLowerCase() === potentialTag.toLowerCase())) {
              tags.push(Tag.build({ name: potentialTag }));
            }
          }
        } catch (ex) {
          handleSteamImportCollectorError(ex, sentPlayersMessage, gameId);
          return;
        }
      }
      
      try{
        tags = await findOrCreateTags(tags);

        const game = await insertGame(gameName, lowerPlayerBound, upperPlayerBound, basicImportFlag, gameId, tags);
        await mapGameToSteamUser(game, steamUserPlatformMapping);

        if (!basicImportFlag) {
          const successMessage = { content: `Successfully saved ${game.toString()}`, options: { flags: MessageFlags.Ephemeral }};
          if (typeof messageToReply !== "undefined") {
            await messageToReply.reply(successMessage);
          } else {
            // interaction.followUp(successMessage)
          }
        }

        importedSteamGames.push(game);
      } catch (ex)  {
        await interaction.followUp({ content: `Failed to import game ${gameId}`, ephemeral: true });
      }
    };

    if (basicImportFlag) {
      let buffer = "Successfully basic imported:\n";
      for (const game of importedSteamGames) {
        const gameString = game.toString();
        if (gameString.length + buffer.length + 2 >= MAX_DISCORD_MESSAGE_LENGTH) {
          await interaction.followUp({ content: buffer, ephemeral: true });
          buffer = "";
        }

        buffer += gameString + "\n";
      }

      await interaction.followUp({ content: buffer, ephemeral: true });
    }
  }
}

export default new SteamImportCommand();