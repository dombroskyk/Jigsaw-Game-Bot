import { getGames } from "../db/sqLiteDbLayer";
import { gameToString } from "../textHelpers/textFormatting";
import { getNumPlayersFromId, getTagAndIntentionFromId } from "../textHelpers/textParsing";
import { startMessageContext, setGame, addGameFilter, getCurrentGame, addPlayerNumFilter, getCurrInteraction, addTagFilter } from "../messageContextHelper";
import { formatGameSuggestion, formatNumberOfPlayersMessage } from "../messageFormatter";

export function handlePlayAGame(msg) {
  msg.reply(formatNumberOfPlayersMessage());
}

export async function handleFilterPlayer() {
  const interaction = getCurrInteraction();
  const numPlayers = getNumPlayersFromId(interaction.customId);

  const filter = addPlayerNumFilter(numPlayers)
  await suggestGame(filter, interaction);
}

export async function handleFilterGame() {
  const interaction = getCurrInteraction();
  const filter = addGameFilter(getCurrentGame().name);

  await suggestGame(filter, interaction);
}

export async function handleFilterTag() {
  const interaction = getCurrInteraction();
  const clickedButtonId = interaction.customId;
  const tagAndIntention = getTagAndIntentionFromId(clickedButtonId);

  const filter = addTagFilter(tagAndIntention);
  await suggestGame(filter, interaction);
}

export async function suggestGame(filter, replyTo) {
  const games = await getGames(filter);
  if (!games.length) {
    replyTo.reply("We ran out of games! Lower your standards and try again");
    return;
  }
  const game = games[Math.floor(Math.random() * games.length)];

  setGame(game);

  replyTo.reply(formatGameSuggestion(game));
}