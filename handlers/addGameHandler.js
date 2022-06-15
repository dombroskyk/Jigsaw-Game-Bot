const { writeGames, getGames } = require("../db/dbLayer.js");
const { replyTimeout } = require("../errorHandling/replyTimeout.js");
const { getPlayerNumBounds, getTagsFromMessage, getNumPlayersFromId } = require("../textHelpers/textParsing.js");
const { gameToString } = require("../textHelpers/textFormatting.js");
const { addTag } = require("./addTagHandler.js");
const { formatNewGameNumPlayersMessage } = require("../messageFormatter.js");
const { getCurrInteraction, addPlayerRange, setGame, getCurrentGame } = require("../messageContextHelper.js");

async function handleAddGame(msg, newGameName) {
  const games = await getGames();
  
  //todo: case insensitive compare
  if (games.includes(newGameName)) {
    msg.reply(`${newGameName} already added.`);
    return;
  }

  setGame(newGameName);
  
  await msg.reply(formatNewGameNumPlayersMessage());
  return;
}

async function handleAddPlayerRange() {
  const interaction = getCurrInteraction();
  const numPlayers = getNumPlayersFromId(interaction.customId);
  const playerRange = addPlayerRange(numPlayers);
  
  await interaction.message.edit(formatNewGameNumPlayersMessage(playerRange));
  
  if (playerRange.length === 2) {
    const bounds = { lowerBound: playerRange[0], upperBound: playerRange[1] }
    await interaction.reply(`Player range ${bounds.lowerBound} - ${bounds.upperBound} entered. What tags should be added to the game? ex: example1, example2, ex3, etc.`);

    const filter = m => interaction.user.id === m.author.id;
    const tagMessages = await interaction.channel.awaitMessages({ filter, time: 60 * 1000, max: 1, errors: ["time"] });
    const tagsMessage = tagMessages.first();
    const inputTags = getTagsFromMessage(tagsMessage).sort((a,b) => a.localeCompare(b));
  
    const game = {
      name: getCurrentGame(),
      players: bounds,
      tags: inputTags
    };
    
    const games = await getGames();
    games.push(game)
    writeGames(games);
    
    tagsMessage.reply(`Successfully saved ${gameToString(game)}`);
  
    game.tags.forEach(gameTag => addTag(tagsMessage, gameTag, false));
  }
  else {
    await interaction.deferUpdate();
  }

  return;
}

module.exports = {
  handleAddGame,
  handleAddPlayerRange,
}