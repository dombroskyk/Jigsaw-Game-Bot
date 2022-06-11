const { getGames } = require("../db/dbLayer.js");
const { gameToString } = require("../textHelpers/textFormatting.js");
const { getNumPlayers, getTagAndIntentionFromId } = require("../textHelpers/textParsing.js");
const { setFilter, startMessageContext, setGame, addGameFilter, getCurrentGame, setPlayerFilter, getCurrInteraction, addTagFilter } = require("../messageContextHelper.js");
const { formatGameSuggestion, formatNumberOfPlayersMessage } = require("../messageFormatter.js")

function handlePlayAGame(msg) {
  msg.reply(formatNumberOfPlayersMessage());
  
  // msg.reply("So you want to play a game... How many people want to play?").then(async () => {
    
  //   const authorFilter = m => msg.author.id === m.author.id;
  //   const messages = await msg.channel.awaitMessages({ authorFilter, time: 60 * 1000, max: 1, errors: ["time"] });
  //   const numPlayerMessage = messages.first();
    
  //   const numPlayers = getNumPlayers(numPlayerMessage);
  //   if (numPlayers === 0) {
  //     numPlayerMessage.reply("No players? Too bad.");
  //     return;
  //   }

  //   const filter = setPlayerFilter(numPlayers);
    
  //   await suggestGame(filter, msg);
  // });
}

async function handleFilterGame() {
  const interaction = getCurrInteraction();
  const filter = addGameFilter(getCurrentGame().name);

  await suggestGame(filter, interaction);
}

async function handleFilterTag() {
  const interaction = getCurrInteraction();
  const clickedButtonId = interaction.customId;
  const tagAndIntention = getTagAndIntentionFromId(clickedButtonId);

  const filter = addTagFilter(tagAndIntention);
  await suggestGame(filter, interaction);
}

async function suggestGame(filter, replyTo) {
  const games = await getGames(filter);
  if (!games.length) {
    replyTo.reply("We ran out of games! Lower your standards and try again");
    return;
  }
  const game = games[Math.floor(Math.random()*games.length)];

  setGame(game);

  replyTo.reply(formatGameSuggestion(game));
}

module.exports = {
  handlePlayAGame,
  handleFilterGame,
  handleFilterTag,
}