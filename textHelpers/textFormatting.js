
//todo: make a game object and move this there
function gameToString(game) {
  return `${game.name}, #: ${game.players.lowerBound} - ${game.players.upperBound}, Tags: ${game.tags.join(", ")}`;
}

module.exports = {
  gameToString,
}