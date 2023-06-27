import { IGame } from "../models/models";
import { getClient } from "../messageContextHelper";
//todo: make a game object and move this there
export function gameToString(game:IGame) {
  // return `${game.name}, #: ${game.lowerPlayerBound} - ${game.upperPlayerBound}, Tags: ${game.tags.join(", ")}`;
  return `${game.name}, #: ${game.lowerPlayerBound} - ${game.upperPlayerBound}, Tags: }`;
}

export async function registeredSteamUserToString(registeredSteamUser) {
  const client = getClient();
  const guild = await client.guilds.fetch('778448107041718353');
  const member = await guild.members.fetch(registeredSteamUser.userId);
  return `User: ${member.nickname}, Steam Id: ${registeredSteamUser.steamId}`;
}