const { getGames, writeGames } = require("../db/dbLayer.js");


async function handleDeleteGame(msg, game) {
  const existingGames = await getGames();
  const gameToDeleteIndex = existingGames.findIndex(existingGame => existingGame.name.toLowerCase() === game.toLowerCase());
  if (gameToDeleteIndex === -1) {
    msg.reply(`Game ${game} could not be found.`);
  }
  else {
    const deletedGame = existingGames.splice(gameToDeleteIndex, 1);
    writeGames(existingGames);

    msg.reply(`Deleted game '${deletedGame[0].name}'.`)
  }
}

module.exports = {
  handleDeleteGame,
}