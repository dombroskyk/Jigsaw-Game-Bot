import * as dotenv from 'dotenv';
// import 'source-map-support/register';
import { Client, GatewayIntentBits, Events, Collection } from "discord.js";
import { setInteraction, startMessageContext, setClient } from "./messageContextHelper";
import { settings } from './settings';
import { closeDb } from './db/sequelizeDbLayer';
import { CommandDictionary } from './types/commandDictionary';
import { buildCommandDictionary } from './commandRegistrationHelpers';
//todo: is there someway to DI this or pass it around?
dotenv.config();

//todo: democracy mode
// MVP: todo: epic integration (must manually manage linking, Discord does not allow getting a users connections via bot)
// -- suggest games from a collection of mentioned users
// string constants to common file?
// minimum permissions
// Success message on basic import
// Substring search
// Right click user action/commands
//scrub client id/secret from old history or generate a new one
const client = new Client({ intents: [GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessages,
                                      GatewayIntentBits.GuildScheduledEvents, GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent] });

const commands: CommandDictionary = buildCommandDictionary();

client.once(Events.ClientReady, () => {
  console.log(`Logged in as ${client.user!.tag}`);
  setClient(client);
  if (settings.DEBUG_MODE) {
    console.log("DEBUG_MODE is ON!");
  }
});

client.on(Events.Error, error => {
  closeDb();
  console.log(`Client error: ${error}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  setInteraction(interaction);
  console.log(interaction);
  if (interaction.isCommand()) {
    const command = commands[interaction.commandName];
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.log(error);
      const errorMessageObj = { content: "There was an error while executing this command!", ephemeral: true};
      try {
        await interaction.reply(errorMessageObj);
      } catch (error2) {
        await interaction.followUp(errorMessageObj)
      }
    }
  } else if (interaction.isAutocomplete()) {
    const command = commands[interaction.commandName];
    if (!command) return;

    try {
      if (command.autocomplete) {
        await command.autocomplete(interaction);
      }
    } catch (error) {
      console.error(error);
    }
  }
});

console.log("Attempting to log in");
client.login(process.env.CLIENT_TOKEN);
