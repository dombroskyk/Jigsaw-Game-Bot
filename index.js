const { Client, Intents } = require("discord.js");
const { getGames, getTags, initializeDatabase, writeGames, writeTags } = require("./dbLayer.js");
const { getRawCommandArguments } = require("./textParsing.js");

const READY_EVENT = "ready";
const MESSAGE_CREATE_EVENT = "messageCreate";
const intents = { intents: [Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_SCHEDULED_EVENTS, Intents.FLAGS.GUILDS] };
const client = new Client(intents);


client.on(READY_EVENT, () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on(MESSAGE_CREATE_EVENT, msg => {
  if (msg.author.bot) return;

  if (!msg.mentions.users.filter(u => u.id === client.user.id).size) return;

  const messageText = msg.content;
  const messageTextLower = messageText.toLowerCase();
  if (messageTextLower.includes("list games")) {
    getGames().then(games => {
      msg.reply(games);
    });
  } else if (messageTextLower.includes("list tags")) {
    getTags().then(tags => {
      console.log(tags);
      msg.reply(tags.join(", "));
    });
  } else if (messageTextLower.includes("add game")) {
    
  } else if (messageTextLower.includes("add tag")) {
    const requestedTag = getRawCommandArguments(messageText, "add tag").trim();

    getTags().then(existingTags => {
      if (existingTags.includes(requestedTag))
      {
        msg.reply("Tag already exists");
      }
      else
      {
        existingTags.push(requestedTag);
        writeTags(existingTags);
        msg.reply(`Added tag '${requestedTag}'`);
      }
    });
    
  } else if (messageTextLower.includes("delete game")) {}
  else if (messageTextLower.includes("delete tag")) {
    const requestedTag = getRawCommandArguments(messageText, "delete tag").trim();

    getTags().then(existingTags => {
      const tagToDeleteIndex = existingTags.findIndex(existingTag => existingTag.toLowerCase() === requestedTag.toLowerCase() );
      if (tagToDeleteIndex === -1)
      {
        msg.reply(`Tag ${requestedTag} could not be found.`);
      } else {
        const deletedTag = existingTags.splice(tagToDeleteIndex, 1);
        writeTags(existingTags);

        msg.reply(`Deleted tag '${deletedTag[0]}'.`)
      }
    });
  } else if (messageTextLower.includes("play")) {
    msg.reply("So you want to play a game...");
  } else {
    msg.reply("Available commands: play, list games, list tags, add game, add tag, delete game, delete tag");
  }
});

initializeDatabase();
client.login(process.env['TOKEN']);

