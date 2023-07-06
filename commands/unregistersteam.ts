import path from "node:path";
// import { getSteamUsers } from '../db/sequelizeDbLayer';
import { SlashCommandBuilder } from "discord.js";
import { CommandDto } from "models/commandDto";

const USER_ARG_KEY = "user"

export default {
	data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".ts"))
    .setDescription("Unregister a user from Jigsaw's Steam integration")
    .addUserOption(option =>
      option.setName(USER_ARG_KEY)
            .setDescription("The Discord user to unregister")
            .setRequired(true)),
  
	async execute(interaction) {
        // const receivedUser = interaction.options.getUser(USER_ARG_KEY);
        
        // const steamUsers = await getSteamUsers();
        // const filteredSteamUsers = steamUsers.filter(steamUser => steamUser.steamId !== receivedUser.id);
        // // await writeSteamUsers(filteredSteamUsers);
    
        // interaction.reply(`Made sure ${receivedUser.username} is no longer registered`);
	},
};
