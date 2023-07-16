import path from "node:path";
import { deleteGame, getGamesByName } from "../db/sequelizeDbLayer";
import { SlashCommandBuilder } from "discord.js";

const COMMAND_NAME = path.basename(__filename, ".ts");
const COMMAND_DESCRIPTION = "Delete a game known by Jigsaw";
const GAME_NAME_ARG_KEY = "game_name";
const GAME_NAME_DESCRIPTION = "Name of game to delete, as it is known to Jigsaw";

export default {
  helpText: `${COMMAND_NAME} - ${COMMAND_DESCRIPTION}
  Args:
  - ${GAME_NAME_ARG_KEY} (required): ${GAME_NAME_DESCRIPTION}`,


  data: new SlashCommandBuilder()
    .setName(COMMAND_NAME)
    .setDescription(COMMAND_DESCRIPTION)
    .addStringOption(option =>
      option.setName(GAME_NAME_ARG_KEY)
        .setDescription(GAME_NAME_ARG_KEY)
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
