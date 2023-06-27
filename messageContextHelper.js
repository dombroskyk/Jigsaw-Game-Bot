
let client = null;
let currMessage = null;
let currInteraction = null;
let currFilter = {};
let currGame = {};
let currPlayerRange = [];

export function startMessageContext(message) {
  currPlayerRange = [];
  setMessageContext(message, {});
}

export function setMessageContext(message, filter) {
  currFilter = filter;
  currMessage = message;
}

export function addGameFilter(filter, gameName) {
  if (!("games" in filter)) {
    filter.games = [];
  }

  filter.games.push(gameName);
  return filter;
}

export function addTagFilter(filter, tagAndIntention) {
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

export function addPlayerNumFilter(filter, numPlayers) {
  filter.numPlayers = numPlayers;
  return filter;
}

export function addPlayerRange(numPlayer) {
  currPlayerRange.push(numPlayer);
  return currPlayerRange.sort();
}

export function setGame(game) {
  currGame = game;
}

export function setInteraction(interaction) {
  //console.log(interaction);
  currInteraction = interaction;
}

export function getCurrentGame() {
  return currGame;
}

export function getCurrInteraction() {
  return currInteraction;
}

export function setClient(clientInst) {
  client = clientInst;
}

export function getClient() {
  return client;
}