import path from "node:path";
import { Game } from "../../models/models";
import { getGames, insertGame } from "../../db/sequelizeDbLayer";
import { ChatInputCommandInteraction, SlashCommandSubcommandBuilder } from "discord.js";
import { buildGameModal, handleGameModalInteraction } from "../../shared/gameModalHelpers";

const COMMAND_NAME = path.basename(__filename, ".ts");
const COMMAND_DESCRIPTION = "Manually add a game to Jigsaw's library.";
const ADD_GAME_MODAL_ID = "addGameModal";

export default {
  helpText: `${COMMAND_NAME} - ${COMMAND_DESCRIPTION} Good for games that aren't on major platforms.
  Args: None`,

  
  data: new SlashCommandSubcommandBuilder()
    .setName(COMMAND_NAME)
    .setDescription(COMMAND_DESCRIPTION),


  async execute(interaction: ChatInputCommandInteraction) {
    try {
      const modal = buildGameModal(ADD_GAME_MODAL_ID);
      await interaction.showModal(modal);
      const filter = (filteredInteraction) => filteredInteraction.customId === ADD_GAME_MODAL_ID;
      const modalInteraction = await interaction.awaitModalSubmit({ filter, time: 4 * 1_000});

      let replyContent: string[] = [];
      const modalResponse = await handleGameModalInteraction(modalInteraction);
      if (modalResponse.lowerPlayerBound == null || isNaN(modalResponse.lowerPlayerBound)) {
        replyContent.push("Lower Player Bound must be an integer.");
      }
      if (modalResponse.upperPlayerBound == null || isNaN(modalResponse.upperPlayerBound)) {
        replyContent.push("Upper Player Bound must be an integer if it is provided.");
      }
      if (modalResponse.lowerPlayerBound !== null && 
          modalResponse.upperPlayerBound !== null && 
          modalResponse.lowerPlayerBound > modalResponse.upperPlayerBound) {
        const newLowerPlayerBound = modalResponse.upperPlayerBound;
        modalResponse.upperPlayerBound = modalResponse.lowerPlayerBound;
        modalResponse.lowerPlayerBound = newLowerPlayerBound;
      }

      const gameCreationVals: Game = Game.build({
        name: modalResponse.name,
        lowerPlayerBound: modalResponse.lowerPlayerBound!.valueOf(),
        upperPlayerBound: modalResponse.upperPlayerBound,
      });

      let game: Game;
      const games = await getGames();
      if (!games.some(game => game.name.toLowerCase() === gameCreationVals.name.toLowerCase())) {
        try {
          game = await insertGame(gameCreationVals, modalResponse.tags);
        } catch (error) {
          console.log(error);
          if (error.name === "SequelizeUniqueConstraintError") {
            await modalInteraction.reply({ content: `Game ${gameCreationVals.name} already exists.`, ephemeral: true});
            return;
          }

          await modalInteraction.reply({ content: `Something went wrong with adding game ${gameCreationVals.name}.`, ephemeral: true });
          return;
        }
      } else {
        await modalInteraction.reply({ content: `${gameCreationVals.name} already exists, delete the existing entry before adding a new instance of it`, ephemeral: true });
        return;
      }

      replyContent = [`Successfully saved ${game.toString()}`];
      
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