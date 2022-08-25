const path = require("node:path");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { getGames, writeGames } = require("../db/dbLayer.js");

const GAME_NAME_ARG_KEY = "game_name";

module.exports = {
  data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".js"))
    .setDescription("Delete a game known by Jigsaw")
    .addStringOption(option =>
      option.setName(GAME_NAME_ARG_KEY)
        .setDescription("Name of game to delete")
        .setRequired(true)),


  async execute(interaction) {
    const game = interaction.options.getString(GAME_NAME_ARG_KEY);

    const existingGames = await getGames();
    const gameToDeleteIndex = existingGames.findIndex(existingGame => existingGame.name.toLowerCase() === game.toLowerCase());
    if (gameToDeleteIndex === -1) {
      interaction.reply(`Game ${game} could not be found.`);
    }
    else {
      const deletedGame = existingGames.splice(gameToDeleteIndex, 1);
      writeGames(existingGames);

      interaction.reply(`Deleted game '${deletedGame[0].name}'.`)
    }
  }


};
