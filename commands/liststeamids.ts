import path from "node:path";
// import { getSteamUsers } from '../db/sequelizeDbLayer';
import { registeredSteamUserToString } from "../textHelpers/textFormatting";
import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".ts"))
    .setDescription("List the Steam Ids registered with Jigsaw"),


  async execute(interaction) {
    // const registeredSteamUsers = await getSteamUsers();
    // if (registeredSteamUsers) {
    //   let registeredSteamUsersFormattedStrings = await Promise.all(registeredSteamUsers.map(async registeredSteamUser => { return await registeredSteamUserToString(registeredSteamUser) }));
    //   let registeredSteamUsersString = registeredSteamUsersFormattedStrings.join("\n");
    //   if (!registeredSteamUsersString)
    //     registeredSteamUsersString = "No registered Steam users... yet";

    //   interaction.reply(registeredSteamUsersString);
    // }
  }
};
