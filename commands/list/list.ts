import path from "node:path";
import { AutocompleteInteraction, ChatInputCommandInteraction, SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "discord.js";
import { getSubcommands } from "../../commandRegistrationHelpers";
import { Command, IParentCommand, ISubcommand } from "../../types/command";

const COMMAND_NAME = path.basename(__filename, '.ts');
const COMMAND_DESCRIPTION = "List the items known to Jigsaw.";
      
const subcommands = getSubcommands(__filename);

class ListCommand extends Command implements IParentCommand {
  helpText: string = `${COMMAND_NAME} - ${COMMAND_DESCRIPTION}
  Args: None.`;


  data: SlashCommandSubcommandsOnlyBuilder = (() => { 
    let slashCommandBuilder: SlashCommandSubcommandsOnlyBuilder = new SlashCommandBuilder()
      .setName(COMMAND_NAME)
      .setDescription(COMMAND_DESCRIPTION);
    
    subcommands.forEach((subcommand: ISubcommand) => slashCommandBuilder.addSubcommand(subcommand.data));

    return slashCommandBuilder;
  })();
    

  execute = async (interaction: ChatInputCommandInteraction): Promise<void> => {
    const subcommand = subcommands.get(interaction.options.getSubcommand());

    if (!subcommand) {
      await interaction.followUp({ content: "Subcommand not found!", ephemeral: true });
      return;
    }

    await subcommand?.execute(interaction);
  }

  autocomplete = async (interaction: AutocompleteInteraction): Promise<void> => {
    const subcommandName = interaction.options.getSubcommand();
    const subcommand = subcommands.get(subcommandName);

    if (!subcommand) {
      console.error(`Subcommand '${subcommandName}' not found!`)
      return;
    }

    if (subcommand.autocomplete) {
      await subcommand.autocomplete(interaction);
    }
  };
}

export default new ListCommand();