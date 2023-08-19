import path from "node:path";
import { getSteamUserPlatformMappings } from '../../db/sequelizeDbLayer';
import { ChatInputCommandInteraction, SlashCommandBuilder, SlashCommandSubcommandBuilder } from "discord.js";

const COMMAND_NAME = path.basename(__filename, ".ts");
const COMMAND_DESCRIPTION = "List the Steam Ids registered with Jigsaw.";

export default {
  helpText: `${path.basename(__dirname)} ${COMMAND_NAME} - ${COMMAND_DESCRIPTION}
  Args: None.`,

  
  data: new SlashCommandSubcommandBuilder()
    .setName(COMMAND_NAME)
    .setDescription(COMMAND_DESCRIPTION),


  async execute(interaction: ChatInputCommandInteraction) {
    const registeredSteamUsers = await getSteamUserPlatformMappings();
    if (!registeredSteamUsers.length) {
      interaction.reply("No registered Steam users... yet");
    } else {
      let registeredSteamUsersFormattedStrings = await Promise.all(registeredSteamUsers.map(async registeredSteamUser => await registeredSteamUser.toString()));
      let registeredSteamUsersString = registeredSteamUsersFormattedStrings.join("\n");

      interaction.reply({ content: registeredSteamUsersString, ephemeral: true });
    }
  }
};
