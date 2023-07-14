import { Game, UserPlatformMapping } from "../models/models";
import { getClient } from "../messageContextHelper";
import * as dotenv from 'dotenv';
dotenv.config()
//todo: make a game object and move this there
export function gameToString(game:Game) {
  return `${game.name}, #: ${game.lowerPlayerBound} - ${game.upperPlayerBound}, Tags: ${game.Tags ? game.Tags.map(tag => tag.name).join(", ") : "none"}`;
}

//todo: move this to UserPlatformMapping
export async function registeredSteamUserToString(registeredSteamUser:UserPlatformMapping) {
  const client = getClient();
  const guild = await client.guilds.fetch(process.env.DISCORD_GUILD_ID);
  const member = await guild.members.fetch(registeredSteamUser.id);
  return `User: ${member.nickname ?? member.user.username}, Steam Id: ${registeredSteamUser.steamId}`;
}