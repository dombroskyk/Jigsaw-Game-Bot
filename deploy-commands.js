import { addCommandsFromDir } from './commandRegistrationHelpers.js';
import { DEBUG_MODE } from './settings.js';
import fs from 'node:fs';
import path from 'node:path';
//const { SlashCommandBuilder } = require('@discordjs/builders');
import { REST, Routes } from '@discordjs/rest';

const guildId = '778448107041718353';
const applicationId = '971568069719777310';

const commands = [];
const pushCommandCallback = (command) => commands.push(command.data.toJSON());
addCommandsFromDir('commands', pushCommandCallback);
if (DEBUG_MODE) {
  addCommandsFromDir('commands/debug', pushCommandCallback);
}

const rest = new REST().setToken(process.env.CLIENT_TOKEN);

rest.put(Routes.applicationGuildCommands(applicationId, guildId), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);