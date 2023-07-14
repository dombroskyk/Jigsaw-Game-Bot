import path from "node:path";
import { getSteamUserPlatformMappings } from '../db/sequelizeDbLayer';
import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".ts"))
    .setDescription("List the Steam Ids registered with Jigsaw"),


  async execute(interaction) {
    const registeredSteamUsers = await getSteamUserPlatformMappings();
    if (!registeredSteamUsers.length) {
      interaction.reply("No registered Steam users... yet");
    } else {
      let registeredSteamUsersFormattedStrings = await Promise.all(registeredSteamUsers.map(async registeredSteamUser => await registeredSteamUser.toString()));
      let registeredSteamUsersString = registeredSteamUsersFormattedStrings.join("\n");

      interaction.reply(registeredSteamUsersString);
    }
  }
};
