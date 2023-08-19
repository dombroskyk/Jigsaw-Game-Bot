import path from "node:path";
import { getTags } from "../../db/sequelizeDbLayer";
import { ChatInputCommandInteraction, SlashCommandBuilder, SlashCommandSubcommandBuilder } from "discord.js";

const COMMAND_NAME = path.basename(__filename, ".ts");
const COMMAND_DESCRIPTION = "List the tags known with Jigsaw";

export default {
  helpText: `${path.basename(__dirname)} ${COMMAND_NAME} - ${COMMAND_DESCRIPTION}
  Args: None.`,

  
  data: new SlashCommandSubcommandBuilder()
    .setName(COMMAND_NAME)
    .setDescription(COMMAND_DESCRIPTION),


  async execute(interaction: ChatInputCommandInteraction) {
    console.log(interaction);
    const tags = await getTags();
    if (!tags.length)
      interaction.reply({ content: "No tags... yet", ephemeral: true });
    interaction.reply({ content: tags.map(tag => tag.name).join(", "), ephemeral: true });
  }
};
