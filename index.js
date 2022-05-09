const { Client, Intents } = require("discord.js");
const { getGames, getTags, initializeDatabase, writeGames, writeTags } = require("./dbLayer.js");
const { getRawCommandArguments, getPlayerNumBounds, getTagsFromMessage } = require("./textHelpers/textParsing.js");
const { gameToString } = require("./textHelpers/textFormatting.js");
const { handlePlayAGame } = require("./handlers/playAGameHandler.js")
const { handleAddGame } = require("./handlers/addGameHandler.js");
const { handleAddTag } = require("./handlers/addTagHandler.js");
const { handleListGames } = require("./handlers/listGamesHandler.js");
const { handleDeleteGame } = require("./handlers/deleteGameHandler.js");
const { handleListTags } = require("./handlers/listTagsHandler.js");
const { handleDeleteTag } = require("./handlers/deleteTagHandler.js");
const { handleHelp } = require("./handlers/helpHandler.js");

//todo: introduce typescript?
const READY_EVENT = "ready";
const MESSAGE_CREATE_EVENT = "messageCreate";
const ERROR_EVENT = "error";
const intents = { intents: [Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_SCHEDULED_EVENTS, Intents.FLAGS.GUILDS] };
const client = new Client(intents);

client.on(READY_EVENT, () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on(ERROR_EVENT, error => {
  console.log(`Client error: ${error}`);
});

client.on(MESSAGE_CREATE_EVENT, msg => {
  if (msg.author.bot) return;

  if (!msg.mentions.users.filter(u => u.id === client.user.id).size) return;

  const messageText = msg.content;
  const messageTextLower = messageText.toLowerCase();
  if (messageTextLower.includes("list games")) {
    handleListGames(msg);
  }
  else if (messageTextLower.includes("list tags")) {
    getTags().then(tags => {
      msg.reply(tags.join(", "));
    });
  }
  else if (messageTextLower.includes("add game")) {
    const newGameName = getRawCommandArguments(messageText, "add game").trim();

    handleAddGame(msg, newGameName);
  }
  else if (messageTextLower.includes("add tag")) {
    const tagToAdd = getRawCommandArguments(messageText, "add tag");

    handleAddTag(msg, tagToAdd);
  }
  else if (messageTextLower.includes("delete game")) {
    const gameToDelete = getRawCommandArguments(messageText, "delete game");
    
    handleDeleteGame(msg, gameToDelete);
  }
  else if (messageTextLower.includes("delete tag")) {
    const tagToDelete = getRawCommandArguments(messageText, "delete tag");

    handleDeleteTag(msg, tagToDelete);
  }
  else if (messageTextLower.includes("play a game")) {
    handlePlayAGame(msg);
  }
  else {
    handleHelp(msg);
  }
});

initializeDatabase();
client.login(process.env['TOKEN']);
// console.log("login");
// console.log(client.isReady());
