import path from "node:path";
import { CommandDto } from "models/commandDto";
import { SlashCommandBuilder } from "discord.js";
// import { getImportedSteamGameIds, writeImportedSteamGameIds } from "../../db/sqLiteDbLayer";

const STEAM_GAME_ID_ARG_KEY = "steamgameid";

export default {
  data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".ts").toLocaleLowerCase())
    .setDescription("ADMIN - Unmark one or more Steam game ids from the list of imported games")
    .addStringOption(option =>
      option.setName(STEAM_GAME_ID_ARG_KEY)
        .setDescription("Game id to forget - leave this empty to clear everything")
        .setRequired(false)),


  async execute(interaction) {
    // const steamGameIdArg = interaction.options.getString(STEAM_GAME_ID_ARG_KEY);
    // const importedSteamGameIds = await getImportedSteamGameIds();

    // if (steamGameIdArg) {
    //   importedSteamGameIds.filter((importedSteamGameId) => { importedSteamGameId !== steamGameIdArg });
    //   writeImportedSteamGameIds(importedSteamGameIds);
    //   await interaction.reply(`Removed ${steamGameIdArg} from list of imported Steam game ids`);
    //   return;
    // }

    // writeImportedSteamGameIds([]);
    // await interaction.reply("Cleared all imported Steam game ids");
  }
}