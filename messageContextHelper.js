
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

export function addPlayerRange(numPlayer) {
  currPlayerRange.push(numPlayer);
  return currPlayerRange.sort();
}

export function setGame(game) {
  currGame = game;
}

export function setInteraction(interaction) {
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