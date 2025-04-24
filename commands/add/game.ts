import path from "node:path";
import { Game } from "../../db/models/models";
import { insertGame } from "../../db/sequelizeDbLayer";
import { ChatInputCommandInteraction, SlashCommandSubcommandBuilder } from "discord.js";
import { buildGameModal, handleGameModalInteraction } from "../../shared/gameModalHelpers";
import { validateGameInputs } from "../../shared/validationHelpers";

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
      const modalInteraction = await interaction.awaitModalSubmit({ filter, time: 4 * 60_000});

      //validate modal input
      const modalResponse = await handleGameModalInteraction(modalInteraction);
      const gameValidationResponse = await validateGameInputs(modalResponse.name, modalResponse.lowerPlayerBound, modalResponse.upperPlayerBound);

      if (!gameValidationResponse.success) {
        await modalInteraction.reply({ content: gameValidationResponse.errorMessage, ephemeral: true});
        return;
      }

      let game: Game;
      try {
        game = await insertGame(modalResponse.name, modalResponse.lowerPlayerBound!.valueOf(), modalResponse.upperPlayerBound, false, null, modalResponse.tags);
      } catch (insertGameError) {
        console.log(insertGameError);
        await modalInteraction.reply({ content: insertGameError.message, ephemeral: true});
        return;
      }
      
      await modalInteraction.reply({ content: `Successfully saved ${game.toString()}`, ephemeral: true });
    } catch (ex) {
      let message = String(ex);
      if (ex instanceof Error) message = ex.message;

      if (message.toLocaleLowerCase().indexOf("time") !== -1) {
        message = 'Timed out waiting for modal.\r\nIf this was unintentional please start over again.';
      }
      
      await interaction.followUp({ content: message, ephemeral: true });
    }
  }
}