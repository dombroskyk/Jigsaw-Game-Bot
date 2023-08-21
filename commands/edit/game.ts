import path from "node:path";
import { Game, Tag } from "../../models/models";
import { findOrCreateTags, getGameById, getGames, getGamesByName, insertGame } from "../../db/sequelizeDbLayer";
import { ChatInputCommandInteraction, SlashCommandSubcommandBuilder } from "discord.js";
import { buildGameModal, handleGameModalInteraction } from "../../shared/gameModalHelpers";

const COMMAND_NAME = path.basename(__filename, ".ts");
const COMMAND_DESCRIPTION = "Edit a game within Jigsaw's library.";
const EDIT_GAME_MODAL_ID = "editGameModal";
const GAME_NAME_ARG_KEY = "name";
const GAME_NAME_DESCRIPTION = "Name of game to edit";

export default {
  helpText: `${COMMAND_NAME} - ${COMMAND_DESCRIPTION}
  Args:
  - ${GAME_NAME_ARG_KEY} (required): ${GAME_NAME_DESCRIPTION}`,

  
  data: new SlashCommandSubcommandBuilder()
    .setName(COMMAND_NAME)
    .setDescription(COMMAND_DESCRIPTION)
    .addStringOption(option => option.setName(GAME_NAME_ARG_KEY)
        .setDescription("Game to edit")
        .setRequired(true)
    ),
    // .addSubcommandGroup(group =>
    //   group.setName("user_platforms")
    //     .setDescription("Edit a User's Platform Ids")
    //     .addSubcommand(subCommand =>
    //       subCommand.setName("steam_id")
    //         .setDescription("Edit a User's Steam Id in case they changed it in Steam")
    //         .addUserOption(option => option.setName("user").setDescription("Discord user to edit the Steam Id for"))
    //         .addStringOption(option => option.setName("steam_id").setDescription("New Steam Id to assign for the Discord user"))
    //     )
    // ),


  async execute(interaction: ChatInputCommandInteraction) {
    const gameNameFromArg = interaction.options.getString(GAME_NAME_ARG_KEY, true);
    const matchingGames = await getGamesByName(gameNameFromArg);
    if (matchingGames.length === 0) {
      await interaction.reply({ content: `Could not find any games in Jigsaw's library matching '${gameNameFromArg}'`, ephemeral: true });
      return;
    }
    const game = matchingGames[0];

    const modal = buildGameModal(EDIT_GAME_MODAL_ID, game);
    await interaction.showModal(modal);

    try {
      const filter = (interaction) => interaction.customId === EDIT_GAME_MODAL_ID;
      const modalInteraction = await interaction.awaitModalSubmit({ filter, time: 4 * 60_000});

      let replyContent: string[] = [];
      if (modalInteraction.isModalSubmit()) {
        const modalResponse = await handleGameModalInteraction(modalInteraction);
        if (modalResponse.lowerPlayerBound == null || isNaN(modalResponse.lowerPlayerBound)) {
          replyContent.push("Lower Player Bound must be an integer.");
        }
        if (modalResponse.upperPlayerBound == null || isNaN(modalResponse.upperPlayerBound)) {
          replyContent.push("Upper Player Bound must be an integer if it is provided.");
        }

        if (replyContent.length === 0) {
          game.name = modalResponse.name;
          game.lowerPlayerBound = modalResponse.lowerPlayerBound!.valueOf();
          game.upperPlayerBound = modalResponse.upperPlayerBound;
          await game.setTags(modalResponse.tags);
          await game.save();
          const savedGame = await getGameById(game.id);

          replyContent = [`Successfully saved ${savedGame.toString()}`];
        }
      }
      await modalInteraction.reply({ content: replyContent.join('\r\n'), ephemeral: true });
    } catch (ex) {
      let message = String(ex);
      if (ex instanceof Error) message = ex.message;

      if (message.toLocaleLowerCase().indexOf("time") !== -1) {
        message = `Timed out waiting for modal.\r\nIf this was unintentional please start over again.`;
      }
      
      await interaction.followUp({ content: message, ephemeral: true });
    }
  }
}