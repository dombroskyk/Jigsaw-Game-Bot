import path from "node:path";
import { getTags } from "../db/sequelizeDbLayer";
import { SlashCommandBuilder } from "discord.js";

const COMMAND_NAME = path.basename(__filename, ".ts");
const COMMAND_DESCRIPTION = "List the tags known with Jigsaw";

export default {
  helpText: `${COMMAND_NAME} - ${COMMAND_DESCRIPTION}
  Args: None.`,

  
  data: new SlashCommandBuilder()
    .setName(COMMAND_NAME)
    .setDescription(COMMAND_DESCRIPTION),


  async execute(interaction) {
    const tags = await getTags();
    if (!tags.length)
      interaction.reply("No tags... yet");
    interaction.reply(tags.map(tag => tag.name).join(", "));
  }
};
