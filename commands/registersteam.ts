import path from "node:path";
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { insertSteamUserPlatformMapping } from "../db/sequelizeDbLayer";

const COMMAND_NAME = path.basename(__filename, ".ts");
const COMMAND_DESCRIPTION = "Sets a Steam Id for a Discord user for use with other commands.";
const USER_ARG_KEY = "user";
const USER_DESCRIPTION = "The Discord user to assign the Steam Id for (Use @ notation)";
const STEAM_ID_ARG_KEY = "steamid";
const STEAM_ID_DESCRIPTION = "The user's Steam ID";

export default {
  helpText: `${COMMAND_NAME} - ${COMMAND_DESCRIPTION}
  Args:
  - ${USER_ARG_KEY} (required): ${USER_DESCRIPTION}
  - ${STEAM_ID_ARG_KEY}: ${STEAM_ID_DESCRIPTION}`,
	data: new SlashCommandBuilder()
    .setName(COMMAND_NAME)
    .setDescription(COMMAND_DESCRIPTION)
    .addUserOption(option =>
      option.setName(USER_ARG_KEY)
            .setDescription(USER_DESCRIPTION)
            .setRequired(true))
    .addStringOption(option =>
      option.setName(STEAM_ID_ARG_KEY)
            .setDescription(STEAM_ID_DESCRIPTION)
            .setRequired(true)),
  
	async execute(interaction: ChatInputCommandInteraction) {
    const receivedUser = interaction.options.getUser(USER_ARG_KEY, true);
    const receivedSteamId = interaction.options.getString(STEAM_ID_ARG_KEY, true);

    await insertSteamUserPlatformMapping(receivedUser.id, receivedSteamId);
  
    interaction.reply({ content: `Registered username '${receivedUser.username}' with Steam ID '${receivedSteamId}'`, ephemeral: true });
	},
};
