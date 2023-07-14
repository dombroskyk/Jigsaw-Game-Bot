import path from "node:path";
import { deleteGame, getGamesByName } from "../db/sequelizeDbLayer";
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
    const gameName = interaction.options.getString(GAME_NAME_ARG_KEY);

    const gamesToDelete = await getGamesByName(gameName);
    if (gamesToDelete.length === 0) {
      await interaction.reply(`Game ${gameName} could not be found.`);
    } else {
      let buffer = "";
      for (const gameToDelete of gamesToDelete) {
        await deleteGame(gameToDelete);

        if (buffer !== "") {
          buffer += "\n";
        }
        buffer += `Deleted game '${gameToDelete.name}'.`;
      }

      await interaction.reply(buffer);
    }
  }
};
