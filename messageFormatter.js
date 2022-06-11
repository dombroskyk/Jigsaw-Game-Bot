const { gameToString } = require("./textHelpers/textFormatting.js");
const { MessageActionRow, MessageButton } = require("discord.js");

const YES_GAME_BUTTON_ID = "YesGame";
const YES_GAME_LABEL = "Let's play!";
const NO_GAME_BUTTON_ID = "NoGame";
const NO_GAME_LABEL = "Not this game";

class DiscordStyles {
  static DANGER = Symbol("DANGER");
  static SUCCESS = Symbol("SUCCESS");
  static PRIMARY = Symbol("PRIMARY");
}

function formatGameSuggestion(game) {
  const gameRow = new MessageActionRow()
    .addComponents([
      new MessageButton()
        .setCustomId(YES_GAME_BUTTON_ID)
        .setLabel(YES_GAME_LABEL)
        .setStyle(DiscordStyles.SUCCESS.description),
      new MessageButton()
        .setCustomId(NO_GAME_BUTTON_ID)
        .setLabel(NO_GAME_LABEL)
        .setStyle(DiscordStyles.DANGER.description)
  ]);

  let tagRows = [];
  const yesTagRow = new MessageActionRow();
  const noTagRow = new MessageActionRow();
  for (let i = 0; i < game.tags.length; i++) {
    yesTagRow.addComponents([
      new MessageButton()
        .setCustomId(`${tag}_yes`)
        .setLabel(`Filter ${tag}`)
        .setStyle(DiscordStyles.PRIMARY.description),
    ]);
    noTagRow.addComponents([
      new MessageButton()
        .setCustomId(`${tag}_no`)
        .setLabel(`Filter Out ${tag}`)
        .setStyle(DiscordStyles.DANGER.description),
    ]);
    
    if ((i+1) % 5 === 0) {
      tagRows.push(yesTagRow, noTagRow);
      yesTagRow = new MessageActionRow();
      noTagRow = new MessageActionRow();
    }
  }
    
  if ((i+1) % 5 !== 0) {
    tagRows.push(yesTagRow, noTagRow);
  }
  
  return { content: `How about '${gameToString(game)}'?`, components: [gameRow, ...tagRows] };
}

function generatePlayerButtons() {
  let playerNumButtons = []
  for (let i = 0; i < 9; i++) {
    playerNumButtons.push(
      new MessageButton()
        .setCustomId(`${i+1}_numPlayer`)
        .setLabel(`${i+1}`)
        .setStyle(DiscordStyles.PRIMARY.description),
    );
  }

  playerNumButtons.push(
    new MessageButton()
      .setCustomId(`10+_numPlayer`)
      .setLabel(`10+`)
      .setStyle(DiscordStyles.PRIMARY.description),
  );

  let playerNumRows = [];
  playerNumRows.push(new MessageActionRow().addComponents(playerNumButtons.slice(0,5)));
  playerNumRows.push(new MessageActionRow().addComponents(playerNumButtons.slice(5)));

  return playerNumRows;
}

function formatNumberOfPlayersMessage() {
  const text = "So you want to play a game... How many people want to play?";
  return { content: text, components: generatePlayerButtons() };
}

module.exports = {
  formatGameSuggestion,
  formatNumberOfPlayersMessage,
}