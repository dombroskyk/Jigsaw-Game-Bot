import path from "node:path";
import { SlashCommandBuilder } from "discord.js";
import { dumpDb } from "../../db/sequelizeDbLayer";

export default {
  data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".ts").toLocaleLowerCase())
    .setDescription("ADMIN - Examine database contents"),


  async execute(interaction) {
    await dumpDb();
    await interaction.reply("Database dumped to console.");
  }
}