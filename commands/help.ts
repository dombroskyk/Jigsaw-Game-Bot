import fs from "node:fs";
import path from "node:path";
import { APIApplicationCommandOptionChoice, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { Command, ICommand } from "../types/command";

const COMMAND_NAME_ARG_KEY = "command_name";
const BASE_HELP_TEXT = "Jigsaw Game Bot is here to help you choose a game to play; either alone or with friends!\r\nProvide a command name to the help command to get more detailed info for that command.";

const commandsPath = path.join(__dirname);
const commandsPathContents = fs.readdirSync(commandsPath, { withFileTypes: true });
const commandFiles = commandsPathContents.filter(dirEnt => dirEnt.isFile());
const commandDirs = commandsPathContents.filter(dirEnt => dirEnt.isDirectory());
let helpTextMapping: Map<string, ICommand> = new Map<string, ICommand>();
let choices: APIApplicationCommandOptionChoice<string>[] = [];
for (const commandFile of commandFiles) {
  const filePath = path.join(commandsPath, commandFile.name);
  helpTextMapping.set(commandFile.name, require(filePath).default);

  const fileBasename = path.basename(filePath, '.ts');
  choices.push({ name: fileBasename, value: fileBasename });
}

for (const dir of commandDirs) {
  const filePath = path.join(commandsPath, dir.name, `${dir.name}.ts`);
  const command: ICommand = require(filePath).default;
  helpTextMapping.set(dir.name, command);

  choices.push({ name: dir.name, value: dir.name });

  const commandFolderContents = fs.readdirSync(path.join(commandsPath, dir.name)).filter(fileName => path.basename(fileName, '.ts') !== dir.name);
  for (const subcommandFile of commandFolderContents) {
    const subCommandFileBasename = path.basename(subcommandFile, '.ts');
    const subCommandFilePath = path.join(commandsPath, dir.name, subcommandFile)
    const subCommand = require(subCommandFilePath).default;
    
    const subCommandChoice = `${dir.name} ${subCommandFileBasename}`
    helpTextMapping.set(subCommandChoice, subCommand);
    choices.push({ name: subCommandChoice, value: subCommandChoice });
  }
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
      const commandFileNames = commandFiles.map(dirEnt => dirEnt.name);
      for (const fileName of commandFileNames) {
        helpText += `\r\n ${fileName}`;
      }
    } else {
      const command = helpTextMapping.get(commandName)!;
      const commandHelpText = command.helpText;
      console.log(helpTextMapping);
      if (typeof commandHelpText !== "undefined" && commandHelpText !== "") {
        helpText = commandHelpText;
      } else {
        helpText = "Help text hasn't been defined for this command yet!"
      }
    }

    await interaction.reply({ content: helpText, ephemeral: true });
  }
}

helpTextMapping.set("help", new HelpCommand());

export default new HelpCommand();
