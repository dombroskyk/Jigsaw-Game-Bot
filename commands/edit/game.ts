import path from "node:path";
import { Game, Tag } from "../../models/models";
import { findOrCreateTags, getGameById, getGames, getGamesByName, insertGame } from "../../db/sequelizeDbLayer";
import { APIActionRowComponent, APIApplicationCommandOptionChoice, APITextInputComponent, ActionRowBuilder, ChatInputCommandInteraction, InteractionCollector, ModalActionRowComponentBuilder, ModalBuilder, SlashCommandBuilder, SlashCommandSubcommandBuilder, SlashCommandSubcommandsOnlyBuilder, TextInputBuilder, TextInputStyle } from "discord.js";

const GAME_SUBCOMMAND_NAME = "game";

const NAME_CHOICE_VALUE = "Name";
const LOWER_PLAYER_BOUND_CHOICE_VALUE = "LowerPlayerBound";
const UPPER_PLAYER_BOUND_CHOICE_VALUE = "UpperPlayerBound";
const TAGS_CHOICE_VALUE = "Tags";

const COMMAND_NAME = path.basename(__filename, ".ts");
const COMMAND_DESCRIPTION = "Edit a game within Jigsaw's library.";
const GAME_NAME_ARG_KEY = "name";
const GAME_NAME_DESCRIPTION = "Name of game to edit";
const GAME_ATTRIBUTE_ARG_KEY = "game_attribute";
const GAME_ATTRIBUTE_DESCRIPTION = "";
const GAME_ATTRIBUTE_CHOICES: APIApplicationCommandOptionChoice<string>[] = [
  { name: 'Name', value: NAME_CHOICE_VALUE },
  { name: 'Lower Player Bound', value: LOWER_PLAYER_BOUND_CHOICE_VALUE },
  { name: 'Upper Player Bound', value: UPPER_PLAYER_BOUND_CHOICE_VALUE },
  { name: 'Tags', value: TAGS_CHOICE_VALUE }
];

const LOWER_PLAYER_BOUND_ARG_KEY = "lower_player_bound";
const LOWER_PLAYER_BOUND_DESCRIPTION = "Player range - Lower bound";
const UPPER_PLAYER_BOUND_ARG_KEY = "upper_player_bound";
const UPPER_PLAYER_BOUND_DESCRIPTION = "Player range - Upper bound";
const TAG_ARG_KEY = "tag";

export default {
  helpText: `${COMMAND_NAME} - ${COMMAND_DESCRIPTION} Good for games that aren't on major platforms.
  Args:
  - ${GAME_NAME_ARG_KEY} (required): ${GAME_NAME_DESCRIPTION}
  - ${LOWER_PLAYER_BOUND_ARG_KEY} (required): ${LOWER_PLAYER_BOUND_DESCRIPTION}
  - ${UPPER_PLAYER_BOUND_ARG_KEY} (required): ${UPPER_PLAYER_BOUND_DESCRIPTION}
  - ${TAG_ARG_KEY}1-10: Describe the game being added with one or more tags`,

  
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
    const subCommand = interaction.options.getSubcommand();
    
    if (subCommand === GAME_SUBCOMMAND_NAME) {
      const gameNameFromArg = interaction.options.getString(GAME_NAME_ARG_KEY, true);
      const matchingGames = await getGamesByName(gameNameFromArg);
      if (matchingGames.length === 0) {
        await interaction.reply({ content: `Could not find any games in Jigsaw's library matching '${gameNameFromArg}'`, ephemeral: true });
        return;
      }
      const game = matchingGames[0];

      const modal = new ModalBuilder()
                      .setCustomId("editGameModal")
                      .setTitle(`Edit ${game.name}`);

      const gameNameRow: ActionRowBuilder<ModalActionRowComponentBuilder> = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
        new TextInputBuilder()
          .setCustomId('nameInput')
          .setLabel('Name')
          .setStyle(TextInputStyle.Short)
          .setRequired(true)
          .setValue(game.name)
      );

      const lowerPlayerBoundRow: ActionRowBuilder<ModalActionRowComponentBuilder> = new ActionRowBuilder<TextInputBuilder>().addComponents(
        new TextInputBuilder()
          .setCustomId('lowerPlayerBoundInput')
          .setLabel('Lower Player Bound')
          .setStyle(TextInputStyle.Short)
          .setRequired(true)
          .setValue(game.lowerPlayerBound.toLocaleString())
      );

      const upperPlayerBoundRow: ActionRowBuilder<ModalActionRowComponentBuilder> = new ActionRowBuilder<TextInputBuilder>().addComponents(
        new TextInputBuilder()
          .setCustomId('upperPlayerBoundInput')
          .setLabel('Upper Player Bound')
          .setStyle(TextInputStyle.Short)
          .setRequired(false)
          .setValue(game.upperPlayerBound?.toLocaleString() ?? '')
      );

      const tagsRow = new ActionRowBuilder<TextInputBuilder>().addComponents(
        new TextInputBuilder()
          .setCustomId('tagsInput')
          .setLabel('Tags (comma separated list)')
          .setStyle(TextInputStyle.Short)
          .setRequired(false)
          .setValue(game.Tags?.map(tag => tag.name).join(', ') ?? '')
      );

      modal.addComponents(gameNameRow, lowerPlayerBoundRow, upperPlayerBoundRow, tagsRow);
      await interaction.showModal(modal);
      try {
        
        const filter = (interaction) => interaction.customId === 'editGameModal';
        const modalInteraction = await interaction.awaitModalSubmit({ filter, time: 4 * 60_000});

        let replyContent: string[] = [];
        if (modalInteraction.isModalSubmit()) {
          const newName = modalInteraction.fields.getTextInputValue('nameInput');
          const newLowerPlayerBound = parseInt(modalInteraction.fields.getTextInputValue('lowerPlayerBoundInput'), 10);
          const inputUpperPlayerBound = modalInteraction.fields.getTextInputValue('upperPlayerBoundInput');
          let newTags = modalInteraction.fields.getTextInputValue('tagsInput').trim().split(',').filter(x => x !== "");

          if (isNaN(newLowerPlayerBound)) {
            replyContent.push("Lower Player Bound must be an integer.");
          }

          let newUpperPlayerBound: number | null = null;
          if (inputUpperPlayerBound !== '') {
            newUpperPlayerBound = parseInt(inputUpperPlayerBound, 10);
            console.log(newUpperPlayerBound);
            if (isNaN(newUpperPlayerBound)) {
              replyContent.push("Upper Player Bound must be an integer if it is provided.");
            }
          }

          const tags = await findOrCreateTags(newTags.map(newTag => Tag.build({ name: newTag.trim() })));

          if (replyContent.length === 0) {
            game.name = newName;
            game.lowerPlayerBound = newLowerPlayerBound;
            game.upperPlayerBound = newUpperPlayerBound;
            await game.setTags(tags);
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
          message = "Timed out waiting for modal, please start over again.";
        }
        
        await interaction.followUp({ content: message, ephemeral: true });
        return;
      } 
    }
  }
}