const { Client, Intents } = require("discord.js");
const { getGames, getTags, initializeDatabase, writeGames, writeTags } = require("./dbLayer.js");
const { getRawCommandArguments, getPlayerNumBounds, getTagsFromMessage } = require("./textParsing.js");
const { gameToString } = require("./textFormatting.js");

const READY_EVENT = "ready";
const MESSAGE_CREATE_EVENT = "messageCreate";
const intents = { intents: [Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_SCHEDULED_EVENTS, Intents.FLAGS.GUILDS] };
const client = new Client(intents);

function followUpTimeout(waitingMessage)
{
  console.log(waitingMessage);
  waitingMessage.followUp("Timeout - try again when ready");
}

client.on(READY_EVENT, () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("error", error => {
  console.log(`Client error: ${error}`);
});

client.on(MESSAGE_CREATE_EVENT, msg => {
  if (msg.author.bot) return;

  if (!msg.mentions.users.filter(u => u.id === client.user.id).size) return;

  const messageText = msg.content;
  const messageTextLower = messageText.toLowerCase();
  if (messageTextLower.includes("list games")) {
    getGames().then(games => {
      msg.reply(games.map(game => gameToString(game)));
    });
  }
  else if (messageTextLower.includes("list tags")) {
    getTags().then(tags => {
      msg.reply(tags.join(", "));
    });
  }
  else if (messageTextLower.includes("add game")) {
    const newGameName = getRawCommandArguments(messageText, "add game").trim();

    getGames().then(games => {
      if (games.includes(newGameName))
      {
        msg.reply("Game already added");
      }
      else
      {
        msg.reply("How many players? ex. #-#").then(() => {
          const filter = m => msg.author.id === m.author.id;
          msg.channel.awaitMessages({ filter, time: 60 * 1000, max: 1, errors: ["time"]})
            .then(messages => {
              const playerNumMessage = messages.first();
              const bounds = getPlayerNumBounds(playerNumMessage);
              if (!bounds) return;

              playerNumMessage.reply(`Player range ${bounds.lowerBound} - ${bounds.upperBound} entered. What tags should be added to the game? ex. example1, example2, ex3, etc.`).then(() => {
                playerNumMessage.channel.awaitMessages({ filter, time: 60000, max: 1, errors:["time"]})
                  .then(tagMessages => {
                    const tagsMessage = messages.first();
                    const inputTags = getTagsFromMessage(tagsMessage);

                    const game = {
                      name: newGameName,
                      players: bounds,
                      tags: inputTags
                    };
                    games.push(game)
                    writeGames(games);
                    tagsMessage.followUp(`Successfully saved ${newGameName}, players: ${bounds.lowerBound} - ${bounds.upperBound}, tags: ${inputTags.join(", ")}`);
                  })
                  .catch(() => {followUpTimeout(playerNumMessage)});
              });
            })
            .catch(() => {followUpTimeout(msg)});
        });
      }
    });
  }
  else if (messageTextLower.includes("add tag")) {
    const requestedTag = getRawCommandArguments(messageText, "add tag").trim();

    getTags().then(existingTags => {
      //todo: case insensitive compare
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
    
  }
  else if (messageTextLower.includes("delete game")) {}
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
  }
  else if (messageTextLower.includes("play")) {
    msg.reply("So you want to play a game...");
  }
  else {
    msg.reply("Available commands: play, list games, list tags, add game, add tag, delete game, delete tag");
  }
});

initializeDatabase();
client.login(process.env['TOKEN']);
// console.log("login");
// console.log(client.isReady());
