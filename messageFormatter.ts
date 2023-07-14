import { Game } from "models/models";
import { ActionRowBuilder, ButtonStyle, ButtonBuilder, InteractionReplyOptions } from "discord.js";

export const YES_GAME_BUTTON_ID = "YesGame";
const YES_GAME_LABEL = "Let's play!";
export const NO_GAME_BUTTON_ID = "NoGame";
const NO_GAME_LABEL = "Not this game";

export function formatGameSuggestion(game:Game):InteractionReplyOptions {
  const gameRow = new ActionRowBuilder<ButtonBuilder>()
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

  let yesTagComponents:ButtonBuilder[] = [];
  let noTagComponents:ButtonBuilder[] = [];
  const gameTags = game.Tags ?? [];
  for (const tag of gameTags) {
    yesTagComponents.push(
      new ButtonBuilder()
        .setCustomId(`${tag.name}_yes`)
        .setLabel(`Filter For ${tag.name}`)
        .setStyle(ButtonStyle.Primary),
    );
    noTagComponents.push(
      new ButtonBuilder()
        .setCustomId(`${tag.name}_no`)
        .setLabel(`Filter Out ${tag.name}`)
        .setStyle(ButtonStyle.Danger),
    );
  }

  let tagRows:ActionRowBuilder<ButtonBuilder>[] = [];
  tagRows.push(new ActionRowBuilder<ButtonBuilder>().addComponents(yesTagComponents.slice(0, 5)));
  tagRows.push(new ActionRowBuilder<ButtonBuilder>().addComponents(noTagComponents.slice(0, 5)));
  if (yesTagComponents.length > 5) {
    tagRows.push(new ActionRowBuilder<ButtonBuilder>().addComponents(yesTagComponents.slice(5)));
    tagRows.push(new ActionRowBuilder<ButtonBuilder>().addComponents(noTagComponents.slice(5)));
  }

  return { content: `How about '${game.toString()}'?`, components: [gameRow, ...tagRows] };
}

export function generatePlayerButtons(selectedPlayerButtons:number[] = []): ActionRowBuilder<ButtonBuilder>[] {
  let playerNumButtons:ButtonBuilder[] = [];

  for (let i = 1; i < 10; i++) {
    const style = selectedPlayerButtons.includes(i) ? ButtonStyle.Success : ButtonStyle.Primary;

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
      .setStyle(selectedPlayerButtons.includes(10) ? ButtonStyle.Success : ButtonStyle.Primary),
  );

  let playerNumRows:ActionRowBuilder<ButtonBuilder>[] = [];
  playerNumRows.push(new ActionRowBuilder<ButtonBuilder>().addComponents(playerNumButtons.slice(0, 5)));
  playerNumRows.push(new ActionRowBuilder<ButtonBuilder>().addComponents(playerNumButtons.slice(5)));

  return playerNumRows;
}

export function generateSkipAndEndButtons(): ActionRowBuilder<ButtonBuilder> {
  const skipButton = new ButtonBuilder()
    .setCustomId("skipGame")
    .setLabel("Skip")
    .setStyle(ButtonStyle.Danger);

  const endButton = new ButtonBuilder()
    .setCustomId("end")
    .setLabel("End Session")
    .setStyle(ButtonStyle.Danger);

  return new ActionRowBuilder<ButtonBuilder>().addComponents(skipButton, endButton);
}

export function formatNumberOfPlayersMessage():InteractionReplyOptions {
  const text = "So you want to play a game...";
  return { content: text, components: generatePlayerButtons() };
}

export function formatNewGameNumPlayersMessage(gameName:string, includeSkipEndButtons:boolean, selectedPlayerButtons:number[] = []):InteractionReplyOptions {
  const text = `How many players can play ${gameName}? Click the buttons for the range of players that can play:`;
  let componentRows = generatePlayerButtons(selectedPlayerButtons);
  if (includeSkipEndButtons) {
    componentRows.push(generateSkipAndEndButtons());
  }

  return { content: text, components: componentRows };
}