import path from "node:path";
import { CommandDto } from "models/commandDto";
import { SlashCommandBuilder } from "discord.js";
// const { getImportedSteamGameIds, writeImportedSteamGameIds } = require("../../db/sqLiteDbLayer");

export default {
  data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".ts"))
    .setDescription("DEBUG - List Steam game ids from the list of imported games"),

  async execute(interaction) {
    // const importedSteamGameIds = await getImportedSteamGameIds();

    // await interaction.reply(`Imported game ids: ${importedSteamGameIds.join(',')}`);
  }
}