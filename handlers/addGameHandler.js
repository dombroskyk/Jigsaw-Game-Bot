const { writeGames, getGames } = require("../dbLayer.js");
const { replyTimeout } = require("../errorHandling/replyTimeout.js");
const { getPlayerNumBounds, getTagsFromMessage } = require("../textHelpers/textParsing.js");
const { gameToString } = require("../textHelpers/textFormatting.js");
const { addTag } = require("./addTagHandler.js");

function handleAddGame(msg, newGameName) {
  getGames().then(games => {
    //todo: case insensitive compare
    if (games.includes(newGameName)) {
      msg.reply(`${newGameName} already added.`);
    }
    else {
      msg.reply("How many players? ex: #-#").then(() => {
        const filter = m => msg.author.id === m.author.id;
        msg.channel.awaitMessages({ filter, time: 60 * 1000, max: 1, errors: ["time"] })
          .then(messages => {
            const playerNumMessage = messages.first();
            const bounds = getPlayerNumBounds(playerNumMessage);
            if (!bounds) return;

            playerNumMessage.reply(`Player range ${bounds.lowerBound} - ${bounds.upperBound} entered. What tags should be added to the game? ex: example1, example2, ex3, etc.`).then(() => {
              playerNumMessage.channel.awaitMessages({ filter, time: 60 * 1000, max: 1, errors: ["time"] })
                .then(tagMessages => {
                  const tagsMessage = tagMessages.first();
                  const inputTags = getTagsFromMessage(tagsMessage).sort((a,b) => a.localeCompare(b));

                  const game = {
                    name: newGameName,
                    players: bounds,
                    tags: inputTags
                  };
                  games.push(game)
                  writeGames(games);
                  
                  tagsMessage.reply(`Successfully saved ${gameToString(game)}`);

                  game.tags.forEach(gameTag => addTag(tagsMessage, gameTag, false))
                });
                //.catch(() => { replyTimeout(playerNumMessage) });
            });
          })
          //.catch(() => { replyTimeout(msg) });
      });
    }
  });
}

module.exports = {
  handleAddGame,
}