import * as dotenv from 'dotenv';
// import 'source-map-support/register';
import { Client, GatewayIntentBits, Events, Collection, CommandInteraction, CacheType } from "discord.js";
import { getRawCommandArguments, getPlayerNumBounds, getTagsFromMessage } from "./textHelpers/textParsing";
import { setInteraction, startMessageContext, setClient } from "./messageContextHelper";
import { addCommandsFromDir } from './commandRegistrationHelpers';
import { settings } from './settings';
import { closeDb } from './db/sequelizeDbLayer';
import { CommandDto } from 'models/commandDto';
//todo: is there someway to DI this or pass it around?
dotenv.config();

//todo: democracy mode
// MVP: todo: steam/epic integration
// -- suggest games from a collection of mentioned users
// -- import games wizard
// remove tag interaction
// string constants to common file?
// minimum permissions
// ephemeral responses
// mac support flag
// edit game
const client = new Client({ intents: [GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessages,
                                      GatewayIntentBits.GuildScheduledEvents, GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent] });

const setCommandsCallback = (command:CommandDto) => {
  commands.set(command.data.name, command);
};
let commands = new Collection<string, CommandDto>();
addCommandsFromDir(setCommandsCallback);


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

client.on(Events.MessageCreate, async msg => {
  if (msg.author.bot) return;
  if (!msg.mentions.users.filter(u => u.id === client.user!.id).size) return;

  startMessageContext(msg);

  const messageText = msg.content;
  const messageTextLower = messageText.toLowerCase();
});

client.on(Events.InteractionCreate, async (interaction) => {
  setInteraction(interaction);

  if (interaction.isCommand()) {
    const command = commands.get(interaction.commandName);
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
  }
});

console.log("Attempting to log in");
client.login(process.env.CLIENT_TOKEN);
