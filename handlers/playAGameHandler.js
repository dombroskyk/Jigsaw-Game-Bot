const { getGames } = require("../db/dbLayer.js");
const { gameToString } = require("../textHelpers/textFormatting.js");
const { getNumPlayers, getTagAndIntentionFromId } = require("../textHelpers/textParsing.js");
const { setFilter, startMessageContext, setGame, addGameFilter, getCurrentGame, setPlayerFilter, getCurrInteraction, addTagFilter } = require("../messageContextHelper.js");
const { formatGameSuggestion } = require("../messageFormatter.js")

async function handlePlayAGame(msg) {
  startMessageContext(msg);
  msg.reply("So you want to play a game... How many people want to play?").then(async () => {
    
    const authorFilter = m => msg.author.id === m.author.id;
    const messages = await msg.channel.awaitMessages({ authorFilter, time: 60 * 1000, max: 1, errors: ["time"] });
    const numPlayerMessage = messages.first();
    
    const numPlayers = getNumPlayers(numPlayerMessage);
    if (numPlayers === 0) {
      numPlayerMessage.reply("No players? Too bad.");
      return;
    }

    const filter = setPlayerFilter(numPlayers);
    const games = await getGames(filter);
    if (!games.length) {
      interaction.reply("We ran out of games! Lower your standards and try again");
      return;
    }
    const game = games[Math.floor(Math.random()*games.length)];

    setGame(game);
    msg.reply(formatGameSuggestion(game));
  });
}

async function handleFilterGame() {
  const interaction = getCurrInteraction();
  const filter = addGameFilter(getCurrentGame().name);

  const games = await getGames(filter);
  if (!games.length) {
    interaction.reply("We ran out of games! Lower your standards and try again");
    return;
  }
  const game = games[Math.floor(Math.random()*games.length)];

  setGame(game);

  interaction.reply(formatGameSuggestion(game));
}

async function handleFilterTag() {
  const interaction = getCurrInteraction();
  const clickedButtonId = interaction.customId;
  const tagAndIntention = getTagAndIntentionFromId(clickedButtonId);
  console.log(tagAndIntention);

  const filter = addTagFilter(tagAndIntention);
  const games = await getGames(filter);
  if (!games.length) {
    interaction.reply("We ran out of games! Lower your standards and try again");
    return;
  }
  const game = games[Math.floor(Math.random()*games.length)];

  setGame(game);

  interaction.reply(formatGameSuggestion(game));
}

module.exports = {
  handlePlayAGame,
  handleFilterGame,
  handleFilterTag,
}