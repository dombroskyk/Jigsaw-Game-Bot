
function applyGamesFilter(games, filter) {
  console.log(games);
  console.log(filter);
  const filteredGames = games.filter(game => {
      console.log(game);
    if ("numPlayers" in filter
        && !(game.players.lowerBound <= filter.numPlayers
          && game.players.upperBound >= filter.numPlayers)) {
      return false;
    }

    if ("games" in filter) {
      const matchesGameName = (gameFilterElement) => gameFilterElement.toLowerCase() === game.name.toLowerCase();
      if (filter.games.some(matchesGameName)) {
        console.log(`${game.name} matched then name and is filtered out`);
        return false;
      }
    }
    

    return true;
    // const matchesTagReject = (noTagElement) => noTagElement.toLowerCase()
    // if (gameFilter.tags.no.some(matchesTagReject))
  });

  console.log("filter");
  console.log(filter);
  console.log("filteredGames");
  console.log(filteredGames);
  return filteredGames;
}

module.exports = {
  applyGamesFilter,
}