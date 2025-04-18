import path from "node:path";
import { getBasicImportedGames, updateGame } from "../../db/sequelizeDbLayer";
import { ChatInputCommandInteraction, SlashCommandSubcommandBuilder } from "discord.js";
import { buildGameModal, handleGameModalInteraction } from "../../shared/gameModalHelpers";
import { validateGameInputs } from "../../shared/validationHelpers";

const COMMAND_NAME = path.basename(__filename, ".ts");
const COMMAND_DESCRIPTION = "Edit games that were basic imported";
const EDIT_GAME_MODAL_ID = "editGameModal";

export default {
  helpText: `${COMMAND_NAME} - ${COMMAND_DESCRIPTION}
  Args: None`,

  
  data: new SlashCommandSubcommandBuilder()
    .setName(COMMAND_NAME)
    .setDescription(COMMAND_DESCRIPTION),


  async execute(interaction: ChatInputCommandInteraction) {
    const matchingGames = await getBasicImportedGames();
    if (matchingGames.length === 0) {
      await interaction.reply({ content: `Could not find any games in Jigsaw's library that were previously basic imported`, ephemeral: true });
      return;
    }

    // await interaction.deferReply();
    const game = matchingGames[0];
    const modal = buildGameModal(EDIT_GAME_MODAL_ID, game);
    await interaction.showModal(modal);

    try {
      const filter = (interaction) => interaction.customId === EDIT_GAME_MODAL_ID;
      const modalInteraction = await interaction.awaitModalSubmit({ filter, time: 4 * 60_000});

      if (modalInteraction.isModalSubmit()) {
        const modalResponse = await handleGameModalInteraction(modalInteraction);
        const gameValidationResponse = await validateGameInputs(modalResponse.name, modalResponse.lowerPlayerBound, modalResponse.upperPlayerBound);
  
        if (!gameValidationResponse.success) {
          await modalInteraction.reply({ content: gameValidationResponse.errorMessage, ephemeral: true});
          return;
        }
        
        const savedGame = await updateGame(game, modalResponse.name, modalResponse.lowerPlayerBound!.valueOf(), modalResponse.upperPlayerBound, false, modalResponse.tags);
        await modalInteraction.reply({ content: `Successfully saved ${savedGame.toString()}. ${matchingGames.length-1} basic imported games remaining.`, ephemeral: true });
      }
    } catch (ex) {
      console.log(ex);
      let message = String(ex);
      if (ex instanceof Error) message = ex.message;

      if (message.toLocaleLowerCase().indexOf("time") !== -1) {
        message = `Timed out waiting for modal.\r\nIf this was unintentional please start over again.`;
      }
      
      await interaction.followUp({ content: message, ephemeral: true });
    }
  },
}