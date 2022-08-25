
let client = null;
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

function addGameFilter(filter, gameName) {
  if (!("games" in filter)) {
    filter.games = [];
  }

  filter.games.push(gameName);
  return filter;
}

function addTagFilter(filter, tagAndIntention) {
  if (!("tags" in filter)) {
    filter.tags = { yes: [], no: [] };
  }

  if (!("yes" in filter.tags)) {
    filter.tags.yes = [];
  }

  if (!("no" in filter.tags)) {
    filter.tags.no = [];
  }

  filter.tags[tagAndIntention.intention].push(tagAndIntention.tag);
  return filter;
}

function addPlayerNumFilter(filter, numPlayers) {
  filter.numPlayers = numPlayers;
  return filter;
}

function addPlayerRange(numPlayer) {
  currPlayerRange.push(numPlayer);
  return currPlayerRange.sort();
}

function setGame(game) {
  currGame = game;
}

function setInteraction(interaction) {
  //console.log(interaction);
  currInteraction = interaction;
}

function getCurrentGame() {
  return currGame;
}

function getCurrInteraction() {
  return currInteraction;
}

function setClient(clientInst) {
  client = clientInst;
}

function getClient() {
  return client;
}

module.exports = {
  startMessageContext,
  setGame,
  setInteraction,
  addPlayerNumFilter,
  addGameFilter,
  getCurrentGame,
  getCurrInteraction,
  addTagFilter,
  addPlayerRange,
  setClient,
  getClient,
}