import path from "node:path";
import { getGames, writeGames } from "../db/sqLiteDbLayer";
import { CommandDto } from "models/commandDto";
import { SlashCommandBuilder } from "discord.js";

const GAME_NAME_ARG_KEY = "game_name";

export default {
  data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".ts"))
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
