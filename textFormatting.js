

function gameToString(game) {
  return `${game.name}, #${game.bounds.lowerBound} - ${game.bounds.upperBound}, tags: ${game.tags.join(", ")}`;
}

module.exports = {
  gameToString,
}