import path from "node:path";
import { getGames, getGamesByName, getGamesByStartsWith } from "../../db/sequelizeDbLayer";
import { ChatInputCommandInteraction, SlashCommandSubcommandBuilder } from "discord.js";
import { GetGamesFilter } from "../../models/getGamesFilter";

const COMMAND_NAME = path.basename(__filename, ".ts");
const COMMAND_DESCRIPTION = "List details of a game registered with Jigsaw.";
const GAME_NAME_ARG_KEY = "name";
const GAME_NAME_DESCRIPTION = "Name of game to show details";

export default {
  helpText: `${path.basename(__dirname)} ${COMMAND_NAME} - ${COMMAND_DESCRIPTION}
  Args:
  - ${GAME_NAME_ARG_KEY} (required): ${GAME_NAME_DESCRIPTION}`,


  data: new SlashCommandSubcommandBuilder()
    .setName(COMMAND_NAME)
    .setDescription(COMMAND_DESCRIPTION)
    .addStringOption(option => option.setName(GAME_NAME_ARG_KEY)
        .setDescription("Game to edit")
        .setRequired(true)
        .setAutocomplete(true)
    ),
    

  async execute(interaction: ChatInputCommandInteraction) {
    const gameNameFromArg = interaction.options.getString(GAME_NAME_ARG_KEY, true);

    const games = await getGamesByName(gameNameFromArg);
    if (!games.length) {
      await interaction.reply({ content: `Game '${gameNameFromArg}' was not found.`, ephemeral: true });
      return;
    }

    await interaction.reply({ content: `${games[0].toString()}`, ephemeral: true });
  },

  async autocomplete(interaction) {
    const focusedValue = interaction.options.getFocused();
    let games = await getGamesByStartsWith(focusedValue);
    games = games.slice(0, 25);
    
    await interaction.respond(games.map(game => ({ name: game.name, value: game.name })));
  }
};
