const { writeGames, getGames } = require("../db/dbLayer.js");
const { replyTimeout } = require("../errorHandling/replyTimeout.js");
const { getPlayerNumBounds, getTagsFromMessage } = require("../textHelpers/textParsing.js");
const { gameToString } = require("../textHelpers/textFormatting.js");
const { addTag } = require("./addTagHandler.js");

async function handleAddGame(msg, newGameName) {
  const games = await getGames();
  
  //todo: case insensitive compare
  if (games.includes(newGameName)) {
    msg.reply(`${newGameName} already added.`);
  }
  else {
    await msg.reply("How many players? ex: #-#");
    
    const filter = m => msg.author.id === m.author.id;
    const messages = await msg.channel.awaitMessages({ filter, time: 60 * 1000, max: 1, errors: ["time"] });
    
    const playerNumMessage = messages.first();
    const bounds = getPlayerNumBounds(playerNumMessage);
    if (!bounds) return;

    await playerNumMessage.reply(`Player range ${bounds.lowerBound} - ${bounds.upperBound} entered. What tags should be added to the game? ex: example1, example2, ex3, etc.`);
    const tagMessages = await playerNumMessage.channel.awaitMessages({ filter, time: 60 * 1000, max: 1, errors: ["time"] });
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

    game.tags.forEach(gameTag => addTag(tagsMessage, gameTag, false));
  }
}

module.exports = {
  handleAddGame,
}