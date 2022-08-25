const { getClient } = require("../messageContextHelper.js");
//todo: make a game object and move this there
function gameToString(game) {
  return `${game.name}, #: ${game.players.lowerBound} - ${game.players.upperBound}, Tags: ${game.tags.join(", ")}`;
}

async function registeredSteamUserToString(registeredSteamUser) {
  const client = getClient();
  const guild = await client.guilds.fetch('778448107041718353');
  const member = await guild.members.fetch(registeredSteamUser.userId);
  return `User: ${member.nickname}, Steam Id: ${registeredSteamUser.steamId}`;
}

module.exports = {
  gameToString,
  registeredSteamUserToString,
}