const path = require("node:path");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { getImportedSteamGameIds, writeImportedSteamGameIds } = require("../../db/dbLayer.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".js"))
    .setDescription("DEBUG - List Steam game ids from the list of imported games"),


  async execute(interaction) {
    const importedSteamGameIds = await getImportedSteamGameIds();

    await interaction.reply(`Imported game ids: ${importedSteamGameIds.join(',')}`);
  }
}