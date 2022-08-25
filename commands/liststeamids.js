const path = require("node:path");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { getSteamUsers } = require('../db/dbLayer.js');
const { registeredSteamUserToString } = require("../textHelpers/textFormatting.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".js"))
    .setDescription("List the Steam Ids registered with Jigsaw"),


  async execute(interaction) {
    const registeredSteamUsers = await getSteamUsers();
    let registeredSteamUsersFormattedStrings = await Promise.all(registeredSteamUsers.map(async registeredSteamUser => { return await registeredSteamUserToString(registeredSteamUser) }));
    const registeredSteamUsersString = registeredSteamUsersFormattedStrings.join("\n");
    if (!registeredSteamUsersString)
      registeredSteamUsersString = "No registered Steam users... yet";

    interaction.reply(registeredSteamUsersString);
  }


};
