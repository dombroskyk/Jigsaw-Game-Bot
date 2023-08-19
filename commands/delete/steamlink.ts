import path from "node:path";
import { deleteSteamUserPlatformMappingByDiscordId } from '../../db/sequelizeDbLayer';
import { ChatInputCommandInteraction, SlashCommandSubcommandBuilder } from "discord.js";

const COMMAND_NAME = path.basename(__filename, ".ts");
const USER_ARG_KEY = "user";
const COMMAND_DESCRIPTION = "Unregister a Discord user from Jigsaw's Steam Integration.";
const USER_ARG_DESCRIPTION = "The Discord user to unregister. Must be the @ Discord notation.";

export default {
    helpText: `${COMMAND_NAME} - ${COMMAND_DESCRIPTION}
    Args:
    - ${USER_ARG_KEY} (required): ${USER_ARG_DESCRIPTION}`,


    data: new SlashCommandSubcommandBuilder()
        .setName(COMMAND_NAME)
        .setDescription(COMMAND_DESCRIPTION)
        .addUserOption(option =>
            option.setName(USER_ARG_KEY)
                .setDescription(USER_ARG_DESCRIPTION)
                .setRequired(true)),
  
                
    async execute(interaction: ChatInputCommandInteraction) {
        const receivedUser = interaction.options.getUser(USER_ARG_KEY, true);
        await deleteSteamUserPlatformMappingByDiscordId(receivedUser.id);
        interaction.reply({ content: `'${receivedUser.username}' is no longer registered`, ephemeral: true});
    },
};
