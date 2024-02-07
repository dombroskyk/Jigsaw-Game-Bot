import fs from "node:fs";
import path from "node:path";
import { ICommand, ISubcommand } from "types/command";
import { RESTPostAPIChatInputApplicationCommandsJSONBody, SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "discord.js";
import { CommandDictionary } from "./types/commandDictionary";

const COMMANDS_DIR = "commands";

export function getCommandsToRegisterFromDir(): RESTPostAPIChatInputApplicationCommandsJSONBody[] {
  let commandBodies: RESTPostAPIChatInputApplicationCommandsJSONBody[] = [];

  const commandsPath = path.join(__dirname, COMMANDS_DIR);
  const commandPathContents = fs.readdirSync(commandsPath, { withFileTypes: true });
  
  const commandFiles = commandPathContents.filter(dirEnt => dirEnt.isFile());
  const commandDirs = commandPathContents.filter(dirEnt => dirEnt.isDirectory());

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file.name);
    const command = require(filePath).default;
    commandBodies.push(command.data.toJSON());
  }

  for (const dir of commandDirs) {
    const filePath = path.join(commandsPath, dir.name, `${dir.name}.ts`);
    const command: ICommand = require(filePath).default;
    commandBodies.push(command.data.toJSON());
  }

  return commandBodies;
}

export function getSubcommands(filePath: string): Map<string, ISubcommand> {
  const dirName = path.dirname(filePath);
  let subcommands: Map<string, ISubcommand> = new Map<string, ISubcommand>();
  
  const subcommandFiles = fs.readdirSync(dirName).filter(file => file !== path.basename(filePath) && file.endsWith('.ts'));
  for (const subCommandFile of subcommandFiles) {
    const subcommand = require(path.join(dirName, subCommandFile)).default as ISubcommand;
    const subcommandName = path.basename(subCommandFile, '.ts');
    subcommands.set(subcommandName, subcommand);
  }

  return subcommands;
}

export function buildCommandDictionary(): CommandDictionary {
  const commandDictionary = {};
  
  const commandsPath = path.join(__dirname, COMMANDS_DIR);
  const commandPathContents = fs.readdirSync(commandsPath, { withFileTypes: true });
  
  const commandFiles = commandPathContents.filter(dirEnt => dirEnt.isFile() && dirEnt.name.endsWith('.ts'));
  const commandDirs = commandPathContents.filter(dirEnt => dirEnt.isDirectory());

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file.name);
    const command: ICommand = require(filePath).default;
    const commandName = path.basename(filePath, '.ts');

    commandDictionary[commandName] = command;
  }

  for (const dir of commandDirs) {
    const parentCommandDir = path.join(commandsPath, dir.name);
    const parentCommandFiles = fs.readdirSync(parentCommandDir, { withFileTypes: true }).filter(x => x.name === `${dir.name}.ts` && x.isFile());

    for (const parentCommandFile of parentCommandFiles) {
      const parentCommandFilePath = path.join(parentCommandDir, parentCommandFile.name);
      const parentCommand: ICommand = require(parentCommandFilePath).default;
      const parentCommandName = path.basename(parentCommandFilePath, '.ts');

      commandDictionary[parentCommandName] = parentCommand;
    }
  }

  return commandDictionary;
}