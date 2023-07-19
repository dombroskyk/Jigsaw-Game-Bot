import path from "node:path";
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { dumpDb } from "../../db/sequelizeDbLayer";

export default {
  data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".ts").toLocaleLowerCase())
    .setDescription("ADMIN - Examine database contents"),


  async execute(interaction: ChatInputCommandInteraction) {
    await dumpDb();
    await interaction.reply({ content: "Database dumped to console.", ephemeral: true });
  }
}