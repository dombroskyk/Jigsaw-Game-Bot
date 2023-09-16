import path from "node:path";
import { getGames, getGamesByStartsWith } from "../../db/sequelizeDbLayer";
import { ChatInputCommandInteraction, SlashCommandSubcommandBuilder } from "discord.js";

const MAX_DISCORD_MESSAGE_LENGTH = 2000;

const COMMAND_NAME = path.basename(__filename, ".ts");
const COMMAND_DESCRIPTION = "List the games registered with Jigsaw.";

export default {
  helpText: `${path.basename(__dirname)} ${COMMAND_NAME} - ${COMMAND_DESCRIPTION}
  Args: None.`,


  data: new SlashCommandSubcommandBuilder()
    .setName(COMMAND_NAME)
    .setDescription(COMMAND_DESCRIPTION),
    

  async execute(interaction: ChatInputCommandInteraction) {
    const games = await getGames();
    if (!games.length) {
      await interaction.reply({ content: "No games stored... yet", ephemeral: true });
      return;
    }

    await interaction.reply({ content: `Listing Games (${games.length}):`, ephemeral: true });
    let buffer = "";
    for (const game of games) {
      const gameString = game.toString();
      if (gameString.length + buffer.length + 2 >= MAX_DISCORD_MESSAGE_LENGTH) {
        await interaction.followUp({ content: buffer, ephemeral: true });
        buffer = "";
      }

      buffer += gameString + "\n";
    }

    await interaction.followUp({ content: buffer, ephemeral: true });
  }
};
