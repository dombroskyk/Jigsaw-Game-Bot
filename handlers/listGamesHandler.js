const { gameToString } = require("../textHelpers/textFormatting.js");
const { getGames } = require("../db/dbLayer.js");

async function handleListGames(msg) {
  const games = await getGames();

  let gamesString = games.map(game => gameToString(game)).join("\n");
  if (!gamesString)
    gamesString = "No games stored... yet";

  //chunk it, 2k characters
  msg.reply(gamesString);
}

module.exports = {
  handleListGames,
}