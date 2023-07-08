import path from "node:path";
import { deleteSteamUserRegistrationByDiscordId } from '../db/sequelizeDbLayer';
import { SlashCommandBuilder } from "discord.js";

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
        const receivedUser = interaction.options.getUser(USER_ARG_KEY);
        
        await deleteSteamUserRegistrationByDiscordId(receivedUser.id);
    
        interaction.reply(`Made sure ${receivedUser.username} is no longer registered`);
    },
};
