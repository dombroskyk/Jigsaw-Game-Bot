import { REST, Routes } from 'discord.js';
import { addCommandsFromDir } from './commandRegistrationHelpers';
import { settings } from './settings.js';
import * as dotenv from 'dotenv';
import { CommandDto } from 'models/commandDto';
dotenv.config();

const applicationId = '971568069719777310';

const commands:CommandDto[] = [];
const pushCommandCallback = (command) => {
  console.log(command);
  commands.push(command.data.toJSON());
};
addCommandsFromDir(pushCommandCallback);

const rest = new REST().setToken(process.env.CLIENT_TOKEN!);

rest.put(Routes.applicationGuildCommands(applicationId, process.env.DISCORD_GUILD_ID!), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);