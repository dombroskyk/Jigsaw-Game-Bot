import { Game } from "../models/models";
import { getClient } from "../messageContextHelper";
//todo: make a game object and move this there
export function gameToString(game:Game) {
  return `${game.name}, #: ${game.lowerPlayerBound} - ${game.upperPlayerBound}, Tags: ${game.Tags ? game.Tags.map(tag => tag.name).join(", ") : "none"}`;
}

export async function registeredSteamUserToString(registeredSteamUser) {
  const client = getClient();
  const guild = await client.guilds.fetch('778448107041718353');
  const member = await guild.members.fetch(registeredSteamUser.userId);
  return `User: ${member.nickname}, Steam Id: ${registeredSteamUser.steamId}`;
}