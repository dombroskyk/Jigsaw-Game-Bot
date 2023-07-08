import { gameToString } from "./textHelpers/textFormatting";
import { ActionRowBuilder, ButtonComponent, ButtonStyle, ButtonBuilder } from "discord.js";

const YES_GAME_BUTTON_ID = "YesGame";
const YES_GAME_LABEL = "Let's play!";
const NO_GAME_BUTTON_ID = "NoGame";
const NO_GAME_LABEL = "Not this game";

export function formatGameSuggestion(game) {
  const gameRow = new ActionRowBuilder()
    .addComponents([
      new ButtonBuilder()
        .setCustomId(YES_GAME_BUTTON_ID)
        .setLabel(YES_GAME_LABEL)
        .setStyle(ButtonStyle.Success),
      new ButtonBuilder()
        .setCustomId(NO_GAME_BUTTON_ID)
        .setLabel(NO_GAME_LABEL)
        .setStyle(ButtonStyle.Danger)
    ]);

  let yesTagComponents = [];
  let noTagComponents = [];
  for (let i = 0; i < game.tags.length; i++) {
    const tag = game.tags[i];
    yesTagComponents.push(
      new ButtonBuilder()
        .setCustomId(`${tag}_yes`)
        .setLabel(`Filter For ${tag}`)
        .setStyle(ButtonStyle.Primary),
    );
    noTagComponents.push(
      new ButtonBuilder()
        .setCustomId(`${tag}_no`)
        .setLabel(`Filter Out ${tag}`)
        .setStyle(ButtonStyle.Danger),
    );
  }

  let tagRows = [];
  tagRows.push(new ActionRowBuilder().addComponents(yesTagComponents.slice(0, 5)));
  tagRows.push(new ActionRowBuilder().addComponents(noTagComponents.slice(0, 5)));
  if (yesTagComponents.length > 5) {
    tagRows.push(new ActionRowBuilder().addComponents(yesTagComponents.slice(5)));
    tagRows.push(new ActionRowBuilder().addComponents(noTagComponents.slice(5)));
  }

  return { content: `How about '${gameToString(game)}'?`, components: [gameRow, ...tagRows] };
}

export function generatePlayerButtons(selectedPlayerButtons = []) {
  let playerNumButtons = []

  for (let i = 1; i < 10; i++) {
    const style = selectedPlayerButtons.includes((i).toString()) ? ButtonStyle.Success : ButtonStyle.Primary;

    playerNumButtons.push(
      new ButtonBuilder()
        .setCustomId(`${i}_numPlayer`)
        .setLabel(`${i}`)
        .setStyle(style),
    );
  }

  playerNumButtons.push(
    new ButtonBuilder()
      .setCustomId(`10_numPlayer`)
      .setLabel(`10+`)
      .setStyle(selectedPlayerButtons.includes('10') ? ButtonStyle.Success : ButtonStyle.Primary),
  );

  let playerNumRows = [];
  playerNumRows.push(new ActionRowBuilder().addComponents(playerNumButtons.slice(0, 5)));
  playerNumRows.push(new ActionRowBuilder().addComponents(playerNumButtons.slice(5)));

  return playerNumRows;
}

export function generateSkipAndEndButtons() {
  const skipButton = new ButtonBuilder()
    .setCustomId("skipGame")
    .setLabel("Skip")
    .setStyle(ButtonStyle.Danger);

  const endButton = new ButtonBuilder()
    .setCustomId("end")
    .setLabel("End Session")
    .setStyle(ButtonStyle.Danger);

  return new ActionRowBuilder().addComponents([skipButton, endButton]);
}

export function formatNumberOfPlayersMessage() {
  const text = "So you want to play a game...";
  return { content: text, components: generatePlayerButtons() };
}

export function formatNewGameNumPlayersMessage(gameName, includeSkipEndButtons, selectedPlayerButtons = []) {
  const text = `How many players can play ${gameName}? Click the buttons for the range of players that can play:`;
  let componentRows = generatePlayerButtons(selectedPlayerButtons);
  if (includeSkipEndButtons) {
    componentRows.push(generateSkipAndEndButtons());
  }

  return { content: text, components: componentRows };
}