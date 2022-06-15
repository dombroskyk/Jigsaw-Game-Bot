
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
      if ("no" in filter.tags && filter.tags.no.length > 0) {
        return !filter.tags.no.some((noTag) => game.tags.some((gameTag) => gameTag.toLowerCase() === noTag.toLowerCase()))
      }

      if ("yes" in filter.tags && filter.tags.yes.length > 0) {
        return filter.tags.yes.every((yesTag) => game.tags.some((gameTag) => gameTag.toLowerCase() === yesTag.toLowerCase()));
      }
    }

    return true;
  });
  
  return filteredGames;
}

module.exports = {
  applyGamesFilter,
}