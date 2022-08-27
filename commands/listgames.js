const path = require("node:path");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { gameToString } = require("../textHelpers/textFormatting.js");
const { getGames } = require("../db/dbLayer.js");

const MAX_DISCORD_MESSAGE_LENGTH = 2000;

module.exports = {
  data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".js"))
    .setDescription("List the games registered with Jigsaw"),


  async execute(interaction) {
    const games = await getGames();
    if (!games) {
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
    
    await interaction.followUp(buffer);
  }
};
