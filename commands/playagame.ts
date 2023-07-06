import { getGames } from "../db/sequelizeDbLayer";
import { gameToString } from "../textHelpers/textFormatting";
import path from "node:path";
import { addPlayerNumFilter, addGameFilter, addTagFilter } from "../messageContextHelper";
import { handleCollectorError } from "../errorHandling/replyTimeout";
import { formatGameSuggestion } from "../messageFormatter";
import { getTagAndIntentionFromId } from "../textHelpers/textParsing";
import { Game } from "models/models";
import { CommandDto } from "models/commandDto";
import { SlashCommandBuilder } from "discord.js";

const NUM_PLAYERS_ARG_KEY = "num_players";
const ONLY_OWNED_GAMES_ARG_KEY = "only_owned_games"

const BUTTON_COMPONENT_TYPE = 2;
const INPUT_TIMEOUT_MILLISECONDS = 45 * 1000;


const respondToMessage = async (replyTo, content) => {
  let sentMessage;
  if (replyTo["deferred"] || replyTo["replied"]) {
    sentMessage = await replyTo.followUp(content);
  } else {
    sentMessage = await replyTo.reply(content);
    if (!sentMessage) {
      sentMessage = await replyTo.fetchReply();
    }
  }

  return sentMessage;
}

export default {
  data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".ts"))
    .setDescription("Allow Jigsaw to suggest a game for you to play")
    .addIntegerOption(option =>
      option.setName(NUM_PLAYERS_ARG_KEY)
        .setDescription("Number of players")
        .setRequired(true))
    .addBooleanOption(option =>
      option.setName(ONLY_OWNED_GAMES_ARG_KEY)
        .setDescription("Should Jigsaw only suggest games owned by all?")
        .setRequired(false)),

  async execute(interaction) {
    const numPlayers = interaction.options.getInteger(NUM_PLAYERS_ARG_KEY);
    //const onlyOwnedGames = interaction.options.getBoolean(ONLY_OWNED_GAMES_ARG_KEY);

    let currInteraction = interaction;
    currInteraction = await respondToMessage(currInteraction, "So you want to play a game...")

    let filter = addPlayerNumFilter({}, numPlayers);
    let games:Game[] = await getGames(filter);
    while (games.length > 0) {

      if (!games.length) {
        await respondToMessage(currInteraction, "We ran out of games! Lower your standards and try again.");
        return;
      }
      const game = games[Math.floor(Math.random() * games.length)];

      const gameSuggestionMessage = await respondToMessage(currInteraction, formatGameSuggestion(game));

      const gameSuggestionMessageFilter = i => i.user.id === interaction.user.id;
      try {
        const gameSuggestionFeedback = await gameSuggestionMessage.awaitMessageComponent({ gameSuggestionMessageFilter, componentType: BUTTON_COMPONENT_TYPE, time: INPUT_TIMEOUT_MILLISECONDS, max: 1, errors: ["time"] });
        await gameSuggestionFeedback.deferUpdate();

        const buttonId = gameSuggestionFeedback.customId;
        currInteraction = gameSuggestionFeedback.message;
        if (buttonId === "YesGame") {
          await respondToMessage(currInteraction, `Excellent choice... enjoy '${game.name}'!`);
          break;
        } else if (buttonId === "NoGame") {
          filter = await addGameFilter(filter, game.name);
          continue;
        } else {
          const tagAndIntention = getTagAndIntentionFromId(buttonId);
          filter = await addTagFilter(filter, tagAndIntention);
          continue;
        }

      } catch (ex) {
        handleCollectorError(ex, gameSuggestionMessage);
        return;
      }
    }
  }
}