const path = require("node:path");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { getTags } = require("../db/dbLayer.js");

const GAME_NAME_ARG_KEY = "game_name";

module.exports = {
  data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".js"))
    .setDescription("List the tags known with Jigsaw"),


  async execute(interaction) {
    const tags = await getTags();
    interaction.reply(tags.join(", "));
  }


};
