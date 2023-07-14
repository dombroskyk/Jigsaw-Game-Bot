import fs from "node:fs";
import path from "node:path";
import { deleteGame, getGamesByName } from "../db/sequelizeDbLayer";
import { SlashCommandBuilder } from "discord.js";

const COMMANDS_DIR = "commands";
const COMMAND_NAME_ARG_KEY = "command_name";

export default {
  data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".ts"))
    .setDescription("Display helpful info. Supply a command name to get more info on that specific command.")
    .addStringOption(option =>
      option.setName(COMMAND_NAME_ARG_KEY)
        .setDescription("Command to get help with")),
        //make this choices


  async execute(interaction) {
    const commandName = interaction.options.getString(COMMAND_NAME_ARG_KEY);

    let helpText = "Jigsaw Game Bot is here to help you choose a game to play; either alone or with friends!"

    const commandsPath = path.join(__dirname);
    const commandFileNames = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts')).map(fileName => path.parse(fileName).name);
    for (const fileName of commandFileNames) {
      helpText += `\r\n ${fileName}`;
    }

    await interaction.reply(helpText);
  }
};
