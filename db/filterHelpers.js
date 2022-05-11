
function applyGamesFilter(games, gameFilter) {
  console.log(games);
  console.log(gameFilter);
  const filteredGames = games.filter(game => {
      console.log(game);
    if ("numPlayers" in gameFilter
        && !(game.players.lowerBound <= gameFilter.numPlayers
          && game.players.upperBound >= gameFilter.numPlayers)) {
      return false;
    }
    
    // const matchesGameName = (gameElement) => gameElement.name.toLowerCase() === game.name.toLowerCase();
    // if (gameFilter.games.some(matchesGameName))
    //   return false;

    return true;
    // const matchesTagReject = (noTagElement) => noTagElement.toLowerCase()
    // if (gameFilter.tags.no.some(matchesTagReject))
  });

  return filteredGames;
}

module.exports = {
  applyGamesFilter,
}