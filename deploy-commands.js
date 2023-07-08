import { addCommandsFromDir } from './commandRegistrationHelpers.js';
import { DEBUG_MODE } from './settings.js';
import { REST, Routes } from '@discordjs/rest';
import * as dotenv from 'dotenv';
dotenv.config();

const applicationId = '971568069719777310';

const commands = [];
const pushCommandCallback = (command) => commands.push(command.data.toJSON());
addCommandsFromDir('commands', pushCommandCallback);
if (DEBUG_MODE) {
  addCommandsFromDir('commands/debug', pushCommandCallback);
}

const rest = new REST().setToken(process.env.CLIENT_TOKEN);

rest.put(Routes.applicationGuildCommands(applicationId, process.env.DISCORD_GUILD_ID), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);