const { addCommandsFromDir } = require('./commandRegistrationHelpers.js');
const { DEBUG_MODE } = require('./settings.js');

const fs = require('node:fs');
const path = require('node:path');
//const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const guildId = '778448107041718353';
const applicationId = '971568069719777310';

const commands = [];
const pushCommandCallback = (command) => commands.push(command.data.toJSON());
addCommandsFromDir('commands', pushCommandCallback);
if (DEBUG_MODE) {
  addCommandsFromDir('commands/debug', pushCommandCallback);
}

const rest = new REST({ version: '9' }).setToken(process.env['TOKEN']);

rest.put(Routes.applicationGuildCommands(applicationId, guildId), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);