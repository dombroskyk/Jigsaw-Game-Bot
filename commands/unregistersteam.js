const path = require("node:path");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { getSteamUsers, writeSteamUsers } = require('../db/dbLayer.js');

const USER_ARG_KEY = "user"

module.exports = {
	data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".js"))
    .setDescription("Unregister a user from Jigsaw's Steam integration")
    .addUserOption(option =>
      option.setName(USER_ARG_KEY)
            .setDescription("The Discord user to unregister")
            .setRequired(true)),
  
	async execute(interaction) {
    const receivedUser = interaction.options.getUser(USER_ARG_KEY);
    
    const steamUsers = await getSteamUsers();
    const filteredSteamUsers = steamUsers.filter(steamUser => steamUser.userId !== receivedUser.id);
    await writeSteamUsers(filteredSteamUsers);
  
    interaction.reply(`Made sure ${receivedUser.username} is no longer registered`);
	},
};
