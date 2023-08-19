import fs from "node:fs";
import path from "node:path";
import { APIApplicationCommandOptionChoice, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { Command, ICommand } from "../types/command";

const COMMAND_NAME_ARG_KEY = "command_name";
const BASE_HELP_TEXT = "Jigsaw Game Bot is here to help you choose a game to play; either alone or with friends!";

const commandsPath = path.join(__dirname);
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'));
let helpTextMapping: Map<string, string> = new Map<string, string>();
let choices: APIApplicationCommandOptionChoice<string>[] = [];
for (const commandFile of commandFiles) {
  const commandFileName = path.parse(commandFile).name
  helpTextMapping.set(commandFileName, require(path.join(commandsPath, commandFile)).default);

  choices.push({ name: commandFileName, value: commandFileName });
}

class HelpCommand extends Command implements ICommand {
  helpText: string = BASE_HELP_TEXT;

  
  data: Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup"> = new SlashCommandBuilder()
    .setName(path.basename(__filename, ".ts"))
    .setDescription("Display helpful info. Supply a command name to get more info on that specific command.")
    .addStringOption(option =>
      option.setName(COMMAND_NAME_ARG_KEY)
        .setDescription("Command to get help with")
        .addChoices(
          ...choices
        ));


  execute = async (interaction: ChatInputCommandInteraction) => {
    const commandName = interaction.options.getString(COMMAND_NAME_ARG_KEY);
    let helpText = "";

    if (!commandName) {
      helpText = BASE_HELP_TEXT;
      const commandFileNames = commandFiles.map(fileName => path.parse(fileName).name);
      for (const fileName of commandFileNames) {
        helpText += `\r\n ${fileName}`;
      }
    } else {
      const commandHelpText = helpTextMapping.get(commandName);
      if (typeof commandHelpText !== "undefined" && commandHelpText !== "") {
        helpText = commandHelpText;
      }
    }

    await interaction.reply({ content: helpText, ephemeral: true });
  }
}

export default new HelpCommand();
