
function applyGamesFilter(games, filter) {
  const filteredGames = games.filter(game => {
    if ("numPlayers" in filter
        && !(game.players.lowerBound <= filter.numPlayers
          && game.players.upperBound >= filter.numPlayers)) {
      return false;
    }

    if ("games" in filter) {
      const matchesGameName = (gameFilterElement) => gameFilterElement.toLowerCase() === game.name.toLowerCase();
      if (filter.games.some(matchesGameName)) {
        return false;
      }
    }

    if ("tags" in filter) {
      if ("no" in filter.tags) {
        return !filter.tags.no.some((noTag) => game.tags.some((gameTag) => gameTag.toLowerCase() === noTag.toLowerCase()))
      }
      
      if ("yes" in filter.tags) {
        return !filter.tags.yes.some((yesTag) => game.tags.some((gameTag) => gameTag.toLowerCase() === yesTag.toLowerCase()))
      }
    }

    return true;
  });
  
  return filteredGames;
}

module.exports = {
  applyGamesFilter,
}