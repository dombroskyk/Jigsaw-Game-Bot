import { getGames } from "../db/sequelizeDbLayer";
import path from "node:path";
import { handleCollectorError } from "../errorHandling/replyTimeout";
import { NO_GAME_BUTTON_ID, YES_GAME_BUTTON_ID, formatGameSuggestion } from "../messageFormatter";
import { getTagAndIntentionFromId } from "../textHelpers/textParsing";
import { Game } from "db/models/models";
import { ChatInputCommandInteraction, ComponentType, InteractionReplyOptions, Message, MessageComponentInteraction, SlashCommandBuilder } from "discord.js";
import { GetGamesFilter } from "../models/getGamesFilter";
import { Command, ICommand } from "../types/command";

const COMMAND_NAME = path.basename(__filename, ".ts");
const COMMAND_DESCRIPTION = "Allow Jigsaw to suggest a game for you to play, randomly, or by narrowing down results.";
const NUM_PLAYERS_ARG_KEY = "num_players";
const NUM_PLAYERS_DESCRIPTION = "Number of players";
const ONLY_OWNED_GAMES_ARG_KEY = "only_owned_games";

const INPUT_TIMEOUT_MILLISECONDS = 45 * 1000;

const respondToMessage = async (replyTo: MessageComponentInteraction | ChatInputCommandInteraction, content: string | InteractionReplyOptions): Promise<Message<boolean>> => {
  let sentMessage;
  if (replyTo.deferred || replyTo.replied) {
    sentMessage = await replyTo.followUp(content);
  } else {
    sentMessage = await replyTo.reply(content);
    if (!sentMessage) {
      sentMessage = await replyTo.fetchReply();
    }
  }

  return sentMessage;
}

class PlayAGameCommand extends Command implements ICommand {
  helpText: string = `${COMMAND_NAME} - ${COMMAND_DESCRIPTION}
  Args:
  - ${NUM_PLAYERS_ARG_KEY} (required): ${NUM_PLAYERS_DESCRIPTION}`;

  data: Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup"> = new SlashCommandBuilder()
    .setName(COMMAND_NAME)
    .setDescription(COMMAND_DESCRIPTION)
    .addIntegerOption(option =>
      option.setName(NUM_PLAYERS_ARG_KEY)
        .setDescription(NUM_PLAYERS_DESCRIPTION)
        .setRequired(true));
    // TODO: 
    // .addBooleanOption(option =>
    //   option.setName(ONLY_OWNED_GAMES_ARG_KEY)
    //     .setDescription("Should Jigsaw only suggest games owned by all?")
    //     .setRequired(false)),

  execute = async (interaction: ChatInputCommandInteraction) => {
    const numPlayers = interaction.options.getInteger(NUM_PLAYERS_ARG_KEY, true);
    //TODO: const onlyOwnedGames = interaction.options.getBoolean(ONLY_OWNED_GAMES_ARG_KEY);

    let currInteraction = interaction;
    await respondToMessage(currInteraction, "So you want to play a game...")

    let filter: GetGamesFilter = new GetGamesFilter(numPlayers)
    let games: Game[] = await getGames(filter);
    while (games.length > 0) {
      const game = games[Math.floor(Math.random() * games.length)];
      const gameSuggestionMessage = await respondToMessage(currInteraction, formatGameSuggestion(game));

      try {
        const gameSuggestionMessageFilter = i => i.user.id === interaction.user.id;
        const gameSuggestionFeedback = await gameSuggestionMessage.awaitMessageComponent({ filter: gameSuggestionMessageFilter, componentType: ComponentType.Button, time: INPUT_TIMEOUT_MILLISECONDS });
        await gameSuggestionFeedback.deferUpdate();

        const buttonId = gameSuggestionFeedback.customId;
        if (buttonId === YES_GAME_BUTTON_ID) {
          await respondToMessage(gameSuggestionFeedback, `Excellent choice... enjoy '${game.name}'!`);
          return;
        } else if (buttonId === NO_GAME_BUTTON_ID) {
          filter.addGameFilter(game.name);
        } else {
          const tagAndIntention = getTagAndIntentionFromId(buttonId);
          filter.addTagFilter(tagAndIntention.tag, tagAndIntention.intention);
        }

        games = await getGames(filter);
      } catch (ex) {
        handleCollectorError(ex, gameSuggestionMessage);
        return;
      }
    }

    await respondToMessage(currInteraction, "We ran out of games! Lower your standards and try again.");
    return;
  }
}

export default new PlayAGameCommand();