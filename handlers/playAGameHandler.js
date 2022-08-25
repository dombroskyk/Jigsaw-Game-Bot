const { getGames } = require("../db/dbLayer.js");
const { gameToString } = require("../textHelpers/textFormatting.js");
const { getNumPlayersFromId, getTagAndIntentionFromId } = require("../textHelpers/textParsing.js");
const { setFilter, startMessageContext, setGame, addGameFilter, getCurrentGame, addPlayerFilter, getCurrInteraction, addTagFilter } = require("../messageContextHelper.js");
const { formatGameSuggestion, formatNumberOfPlayersMessage } = require("../messageFormatter.js")

function handlePlayAGame(msg) {
  msg.reply(formatNumberOfPlayersMessage());
}

async function handleFilterPlayer() {
  const interaction = getCurrInteraction();
  const numPlayers = getNumPlayersFromId(interaction.customId);

  const filter = addPlayerFilter(numPlayers)
  await suggestGame(filter, interaction);
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
  const game = games[Math.floor(Math.random() * games.length)];

  setGame(game);

  replyTo.reply(formatGameSuggestion(game));
}

module.exports = {
  handlePlayAGame,
  handleFilterPlayer,
  handleFilterGame,
  handleFilterTag,
}