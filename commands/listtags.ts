import path from "node:path";
import { getTags } from "../db/sqLiteDbLayer";
import { SlashCommandBuilder } from "discord.js";

const GAME_NAME_ARG_KEY = "game_name";

export default {
  data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".ts"))
    .setDescription("List the tags known with Jigsaw"),


  async execute(interaction) {
    const tags = await getTags();
    interaction.reply(tags.join(", "));
  }
};
