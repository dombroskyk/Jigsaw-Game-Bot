const { gameToString } = require("../textHelpers/textFormatting.js");
const { getGames } = require("../dbLayer.js");

function handleListGames(msg) {
    getGames().then(games => {
      let gamesString = games.map(game => gameToString(game)).join("\r\n");
      if (!gamesString)
        gamesString = "No games stored... yet";
      msg.reply(gamesString);
    });
}

module.exports = {
  handleListGames,
}