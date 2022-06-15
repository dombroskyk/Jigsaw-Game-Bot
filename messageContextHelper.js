
let currMessage = null;
let currInteraction = null;
let currFilter = {};
let currGame = {};
let currPlayerRange = [];

function startMessageContext(message) {
  currPlayerRange = [];
  setMessageContext(message, {});
}

function setMessageContext(message, filter) {
  currFilter = filter;
  currMessage = message;
}

function addGameFilter(gameName) {
  if (!("games" in currFilter)) {
    currFilter.games = [];
  }

  currFilter.games.push(gameName);
  return currFilter;
}

function addTagFilter(tagAndIntention) {
  if (!("tags" in currFilter)) {
    currFilter.tags = { yes: [], no: [] };
  }
  
  if (!("yes" in currFilter.tags)) {
    currFilter.tags.yes = [];
  }

  if (!("no" in currFilter.tags)) {
    currFilter.tags.no = [];
  }

  currFilter.tags[tagAndIntention.intention].push(tagAndIntention.tag);
  return currFilter;
}

function addPlayerFilter(numPlayers) {
  currFilter.numPlayers = numPlayers;
  return currFilter;
}

function addPlayerRange(numPlayer) {
  currPlayerRange.push(numPlayer);
  return currPlayerRange.sort();
}

function setGame(game) {
  currGame = game;
}

function setInteraction(interaction) {
  console.log(interaction);
  currInteraction = interaction;
}

function getCurrentGame() {
  return currGame;
}

function getCurrInteraction() {
  return currInteraction;
}

module.exports = {
  startMessageContext,
  setGame,
  setInteraction,
  addPlayerFilter,
  addGameFilter,
  getCurrentGame,
  getCurrInteraction,
  addTagFilter,
  addPlayerRange,
}