import path from "node:path";
import { gameToString } from "../textHelpers/textFormatting";
import { getGames } from "../db/sequelizeDbLayer";
import { SlashCommandBuilder } from "discord.js";

const MAX_DISCORD_MESSAGE_LENGTH = 2000;

export default {
  data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".ts"))
    .setDescription("List the games registered with Jigsaw"),
    

  async execute(interaction) {
    const games = await getGames();
    if (!games.length) {
      await interaction.reply("No games stored... yet");
      return;
    }

    await interaction.reply(`Listing Games (${games.length}):`);

    let buffer = "";
    for (const game of games) {
      console.log(game);
      const gameString = gameToString(game);
      if (gameString.length + buffer.length + 2 >= MAX_DISCORD_MESSAGE_LENGTH) {
        await interaction.followUp(buffer);
        buffer = "";
      }

      buffer += gameString + "\n";
    }
    
    console.log("buffer");
    console.log(buffer);

    await interaction.followUp(buffer);
  }
};
