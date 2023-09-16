import path from "node:path";
import { AutocompleteInteraction, ChatInputCommandInteraction, SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "discord.js";
import { getSubcommands } from "../../commandRegistrationHelpers";
import { Command, IParentCommand, ISubcommand } from "../../types/command";

const COMMAND_NAME = path.basename(__filename, ".ts");
const COMMAND_DESCRIPTION = "Edit items within Jigsaw's library.";
      
const subcommands = getSubcommands(__filename);

class EditCommand extends Command implements IParentCommand {
  helpText: string = `${COMMAND_NAME} - ${COMMAND_DESCRIPTION}
  See subcommands.`;


  data: SlashCommandSubcommandsOnlyBuilder = (() => { 
    let slashCommandBuilder: SlashCommandSubcommandsOnlyBuilder = new SlashCommandBuilder()
      .setName(COMMAND_NAME)
      .setDescription(COMMAND_DESCRIPTION);
    
    subcommands.forEach((subcommand: ISubcommand) => slashCommandBuilder.addSubcommand(subcommand.data));

    return slashCommandBuilder;
  })();


  execute = async (interaction: ChatInputCommandInteraction): Promise<void> => {
    const subcommandName = interaction.options.getSubcommand();
    const subcommand = subcommands.get(subcommandName);

    if (!subcommand) {
      await interaction.followUp({ content: `Subcommand '${subcommandName}' not found!`, ephemeral: true });
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

export default new EditCommand();