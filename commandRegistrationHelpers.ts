import fs from "node:fs";
import path from "node:path";
import { settings } from "./settings";
import { CommandDto } from "models/commandDto";

const COMMANDS_DIR = "commands";
const DEBUG_COMMANDS_DIR = "debug";

export function addCommandsFromDir(callback) {
  const commandsPath = path.join(__dirname, COMMANDS_DIR);
  let commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

  if (settings.DEBUG_MODE) {
    const debugCommandsPath = path.join(__dirname, COMMANDS_DIR, DEBUG_COMMANDS_DIR);
    const debugCommandFiles = fs.readdirSync(debugCommandsPath).filter(file => file.endsWith('.ts'));

    for (const debugFile of debugCommandFiles) {
      const filePath = path.join(debugCommandsPath, debugFile);
      const command:CommandDto = require(filePath).default;
      callback(command);
    }
  }

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command:CommandDto = require(filePath).default;
    callback(command);
  }
}