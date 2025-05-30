import path from "node:path";
import { ChatInputCommandInteraction, SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "discord.js";
import { getSubcommands } from "../../commandRegistrationHelpers";
import { Command, IParentCommand, ISubcommand } from "../../types/command";

const COMMAND_NAME = path.basename(__filename, '.ts');
const COMMAND_DESCRIPTION = "Debug commands for admin use.";
      
const subcommands = getSubcommands(__filename);

class DebugCommand extends Command implements IParentCommand {
  helpText: string = `${COMMAND_NAME} - ${COMMAND_DESCRIPTION}
  Args: None.`;


  data: SlashCommandSubcommandsOnlyBuilder = (() => { 
    let slashCommandBuilder: SlashCommandSubcommandsOnlyBuilder = new SlashCommandBuilder()
      .setName(COMMAND_NAME)
      .setDescription(COMMAND_DESCRIPTION);
    
    subcommands.forEach((subcommand: ISubcommand) => slashCommandBuilder.addSubcommand(subcommand.data));

    return slashCommandBuilder;
  })();
    

  async execute(interaction: ChatInputCommandInteraction) {
    const subcommand = subcommands.get(interaction.options.getSubcommand());
    
    if (!subcommand) {
      await interaction.followUp({ content: "Subcommand not found!", ephemeral: true });
      return;
    }

    await subcommand?.execute(interaction);
  }
}

export default new DebugCommand();
