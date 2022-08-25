const path = require("node:path");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { getSteamUsers, writeSteamUsers } = require('../db/dbLayer.js');

const USER_ARG_KEY = "user"
const STEAM_ID_ARG_KEY = "steamid"

module.exports = {
	data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".js"))
    .setDescription("Sets a Steam Id for a Discord user for future use")
    .addUserOption(option =>
      option.setName(USER_ARG_KEY)
            .setDescription("The Discord user")
            .setRequired(true))
    .addStringOption(option =>
      option.setName(STEAM_ID_ARG_KEY)
            .setDescription("The user's Steam ID")
            .setRequired(true)),
  
	async execute(interaction) {
    const receivedUser = interaction.options.getUser(USER_ARG_KEY);
    const receivedSteamId = interaction.options.getString(STEAM_ID_ARG_KEY);
    
    const steamUsers = await getSteamUsers();
    const filteredSteamUsers = steamUsers.filter(steamUser => steamUser.userId !== receivedUser.id);

    filteredSteamUsers.push({ userId: receivedUser.id, steamId: receivedSteamId });
    await writeSteamUsers(filteredSteamUsers);
  
    interaction.reply(`Registered username ${receivedUser.username} with Steam ID ${receivedSteamId}`);
	},
};
