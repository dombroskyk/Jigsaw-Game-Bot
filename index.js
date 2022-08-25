const { Client, Intents, Collection } = require("discord.js");
const { getGames, getTags, initializeDatabase, writeGames, writeTags } = require("./db/dbLayer.js");
const { getRawCommandArguments, getPlayerNumBounds, getTagsFromMessage } = require("./textHelpers/textParsing.js");
const { gameToString } = require("./textHelpers/textFormatting.js");
const { handleAddTag } = require("./handlers/addTagHandler.js");
const { handleListGames } = require("./handlers/listGamesHandler.js");
const { handleHelp } = require("./handlers/helpHandler.js");
const { setInteraction, startMessageContext, setClient } = require("./messageContextHelper.js");
const { addCommandsFromDir } = require('./commandRegistrationHelpers.js');
const { DEBUG_MODE } = require('./settings.js');

//todo: introduce typescript?
//todo: democracy mode
//todo: steam/epic integration
// -- suggest games from a collection of mentioned users
// -- import games wizard
// remove tag interaction
// string constants to common file?
// slash commands
// minimum permissions
// ephemeral responses
// mac support flag
const READY_EVENT = "ready";
const MESSAGE_CREATE_EVENT = "messageCreate";
const ERROR_EVENT = "error";
const client = new Client({ intents: [Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_SCHEDULED_EVENTS, Intents.FLAGS.GUILDS] });

const setCommandsCallback = (command) => client.commands.set(command.data.name, command);
client.commands = new Collection();
addCommandsFromDir("commands", setCommandsCallback);
if (DEBUG_MODE) {
  addCommandsFromDir("commands/debug", setCommandsCallback);
}

client.once(READY_EVENT, () => {
  console.log(`Logged in as ${client.user.tag}`);
  setClient(client);
  if (DEBUG_MODE) {
    console.log("DEBUG_MODE is ON!");
  }
});

client.on(ERROR_EVENT, error => {
  console.log(`Client error: ${error}`);
});

client.on(MESSAGE_CREATE_EVENT, async msg => {
  if (msg.author.bot) return;
  if (!msg.mentions.users.filter(u => u.id === client.user.id).size) return;

  startMessageContext(msg);

  const messageText = msg.content;
  const messageTextLower = messageText.toLowerCase();
  if (messageTextLower.includes("list games")) {
    await handleListGames(msg);
  }
  else if (messageTextLower.includes("list tags")) {
    handleListTags(msg);
  }
  else if (messageTextLower.includes("delete game")) {
    const gameToDelete = getRawCommandArguments(messageText, "delete game");

    handleDeleteGame(msg, gameToDelete);
  }
  else if (messageTextLower.includes("list steam ids") && DEBUG_MODE) {
    handleListSteamIds(msg);
  }
  else if (messageTextLower.includes("steam")) {
    handleSteam(msg);
  }
  else {
    handleHelp(msg);
  }
});

client.on('interactionCreate', async interaction => {
  setInteraction(interaction);
  
  if (interaction.isCommand()) {
    const command = client.commands.get(interaction.commandName);
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

initializeDatabase();
console.log("Attempting to log in");
client.login(process.env['TOKEN']);
