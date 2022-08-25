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

  let yesTagComponents = [];
  let noTagComponents = [];
  for (let i = 0; i < game.tags.length; i++) {
    const tag = game.tags[i];
    yesTagComponents.push(
      new MessageButton()
        .setCustomId(`${tag}_yes`)
        .setLabel(`Filter For ${tag}`)
        .setStyle(DiscordStyles.PRIMARY.description),
    );
    noTagComponents.push(
      new MessageButton()
        .setCustomId(`${tag}_no`)
        .setLabel(`Filter Out ${tag}`)
        .setStyle(DiscordStyles.DANGER.description),
    );
  }

  let tagRows = [];
  tagRows.push(new MessageActionRow().addComponents(yesTagComponents.slice(0, 5)));
  tagRows.push(new MessageActionRow().addComponents(noTagComponents.slice(0, 5)));
  if (yesTagComponents.length > 5) {
    tagRows.push(new MessageActionRow().addComponents(yesTagComponents.slice(5)));
    tagRows.push(new MessageActionRow().addComponents(noTagComponents.slice(5)));
  }

  return { content: `How about '${gameToString(game)}'?`, components: [gameRow, ...tagRows] };
}

function generatePlayerButtons(selectedPlayerButtons = []) {
  let playerNumButtons = []

  for (let i = 1; i < 10; i++) {
    const style = selectedPlayerButtons.includes((i).toString()) ? DiscordStyles.SUCCESS.description : DiscordStyles.PRIMARY.description;

    playerNumButtons.push(
      new MessageButton()
        .setCustomId(`${i}_numPlayer`)
        .setLabel(`${i}`)
        .setStyle(style),
    );
  }

  playerNumButtons.push(
    new MessageButton()
      .setCustomId(`10_numPlayer`)
      .setLabel(`10+`)
      .setStyle(selectedPlayerButtons.includes('10') ? DiscordStyles.SUCCESS.description : DiscordStyles.PRIMARY.description),
  );

  let playerNumRows = [];
  playerNumRows.push(new MessageActionRow().addComponents(playerNumButtons.slice(0, 5)));
  playerNumRows.push(new MessageActionRow().addComponents(playerNumButtons.slice(5)));

  return playerNumRows;
}

function generateSkipAndEndButtons() {
  const skipButton = new MessageButton()
    .setCustomId("skipGame")
    .setLabel("Skip")
    .setStyle(DiscordStyles.DANGER.description);

  const endButton = new MessageButton()
    .setCustomId("end")
    .setLabel("End Session")
    .setStyle(DiscordStyles.DANGER.description);

  return new MessageActionRow().addComponents([skipButton, endButton]);
}

function formatNumberOfPlayersMessage() {
  const text = "So you want to play a game...";
  return { content: text, components: generatePlayerButtons() };
}

function formatNewGameNumPlayersMessage(gameName, includeSkipEndButtons, selectedPlayerButtons = []) {
  const text = `How many players can play ${gameName}? Click the buttons for the range of players that can play:`;
  let componentRows = generatePlayerButtons(selectedPlayerButtons);
  if (includeSkipEndButtons) {
    componentRows.push(generateSkipAndEndButtons());
  }

  return { content: text, components: componentRows };
}

module.exports = {
  formatGameSuggestion,
  formatNumberOfPlayersMessage,
  formatNewGameNumPlayersMessage,
}