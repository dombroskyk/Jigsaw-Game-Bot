import * as dotenv from 'dotenv';
// import 'source-map-support/register';
import { Client, GatewayIntentBits, Events, Collection, CommandInteraction } from "discord.js";
import { getGames, getTags, writeGames, writeTags } from "./db/sqLiteDbLayer";
import { getRawCommandArguments, getPlayerNumBounds, getTagsFromMessage } from "./textHelpers/textParsing";
import { gameToString } from "./textHelpers/textFormatting";
import { handleAddTag } from "./handlers/addTagHandler";
import { handleListGames } from "./handlers/listGamesHandler";
import { handleHelp } from "./handlers/helpHandler";
import { setInteraction, startMessageContext, setClient } from "./messageContextHelper";
import { addCommandsFromDir } from './commandRegistrationHelpers';
import { settings } from './settings';
import { Game, closeDb } from './db/sequelizeDbLayer';
import { CommandDto } from 'models/commandDto';

dotenv.config();

//todo: democracy mode
// MVP: todo: steam/epic integration
// -- suggest games from a collection of mentioned users
// -- import games wizard
// remove tag interaction
// string constants to common file?
// MVP: slash commands
// minimum permissions
// ephemeral responses
// mac support flag
const client = new Client({ intents: [GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessages,
                                      GatewayIntentBits.GuildScheduledEvents, GatewayIntentBits.Guilds] });

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
  Game.sync();
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
  if (messageTextLower.includes("list games")) {
    await handleListGames(msg);
  }
  else {
    handleHelp(msg);
  }
});

client.on(Events.InteractionCreate, async interaction => {
  setInteraction(interaction);
  
  console.log(interaction);

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

// initializeDatabase();
console.log("Attempting to log in");
client.login(process.env.CLIENT_TOKEN);
