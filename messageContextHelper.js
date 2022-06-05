
let currMessage = null;
let currInteraction = null;
let currFilter = {};
let currGame = {};

function startMessageContext(message) {
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

function setPlayerFilter(numPlayers) {
  currFilter.numPlayers = numPlayers;
  return currFilter;
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
  setPlayerFilter,
  addGameFilter,
  getCurrentGame,
  getCurrInteraction,
  addTagFilter,
}