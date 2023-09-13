import { REST, RESTPostAPIChatInputApplicationCommandsJSONBody, Routes } from 'discord.js';
import { getCommandsToRegisterFromDir } from './commandRegistrationHelpers';
import * as dotenv from 'dotenv';
dotenv.config();

const commands: RESTPostAPIChatInputApplicationCommandsJSONBody[] = getCommandsToRegisterFromDir();
const rest = new REST().setToken(process.env.CLIENT_TOKEN!);

rest.put(Routes.applicationGuildCommands(process.env.APPLICATION_ID!, process.env.DISCORD_GUILD_ID!), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);