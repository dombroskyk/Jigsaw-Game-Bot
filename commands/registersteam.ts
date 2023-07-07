import path from "node:path";
import { SlashCommandBuilder } from "discord.js";
import { insertSteamUserMapping } from "../db/sequelizeDbLayer";

const USER_ARG_KEY = "user"
const STEAM_ID_ARG_KEY = "steamid"

export default {
	data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".ts"))
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

    await insertSteamUserMapping(receivedUser.id, receivedSteamId);
  
    interaction.reply(`Registered username ${receivedUser.username} with Steam ID ${receivedSteamId}`);
	},
};
