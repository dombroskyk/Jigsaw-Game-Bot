import { gameToString } from "../textHelpers/textFormatting";
import path from "node:path";
import { Game, Tag } from "../models/models";
import { dumpDb, findOrCreateTags, getGames, insertGame } from "../db/sequelizeDbLayer";
import { CommandDto } from "models/commandDto.js";
import { Interaction, SlashCommandBuilder } from "discord.js";
import { CreationAttributes, InferCreationAttributes } from "sequelize";

const GAME_NAME_ARG_KEY = "game_name";
const LOWER_PLAYER_BOUND_ARG_KEY = "lower_player_bound"
const UPPER_PLAYER_BOUND_ARG_KEY = "upper_player_bound"
const TAG_ARG_KEY = "tag";

export default {
  data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".ts"))
    .setDescription("Add a game for Jigsaw to remember")
    .addStringOption(option =>
      option.setName(GAME_NAME_ARG_KEY)
        .setDescription("Name of game")
        .setRequired(true))
    .addIntegerOption(option =>
      option.setName(LOWER_PLAYER_BOUND_ARG_KEY)
        .setDescription("Player range - Lower bound")
        .setRequired(true))
    .addIntegerOption(option =>
      option.setName(UPPER_PLAYER_BOUND_ARG_KEY)
        .setDescription("Player range - Upper bound")
        .setRequired(true))
    .addStringOption(option =>
      option.setName(`${TAG_ARG_KEY}1`)
        .setDescription("First tag (genre/style)")
        .setRequired(false))
    .addStringOption(option =>
      option.setName(`${TAG_ARG_KEY}2`)
        .setDescription("Second tag (genre/style)")
        .setRequired(false))
    .addStringOption(option =>
      option.setName(`${TAG_ARG_KEY}3`)
        .setDescription("Third tag (genre/style)")
        .setRequired(false))
    .addStringOption(option =>
      option.setName(`${TAG_ARG_KEY}4`)
        .setDescription("Fourth tag (genre/style)")
        .setRequired(false))
    .addStringOption(option =>
      option.setName(`${TAG_ARG_KEY}5`)
        .setDescription("Fifth tag (genre/style)")
        .setRequired(false))
    .addStringOption(option =>
      option.setName(`${TAG_ARG_KEY}6`)
        .setDescription("Sixth tag (genre/style)")
        .setRequired(false))
    .addStringOption(option =>
      option.setName(`${TAG_ARG_KEY}7`)
        .setDescription("Seventh tag (genre/style)")
        .setRequired(false))
    .addStringOption(option =>
      option.setName(`${TAG_ARG_KEY}8`)
        .setDescription("Eighth tag (genre/style)")
        .setRequired(false))
    .addStringOption(option =>
      option.setName(`${TAG_ARG_KEY}9`)
        .setDescription("Ninth tag (genre/style)")
        .setRequired(false))
    .addStringOption(option =>
      option.setName(`${TAG_ARG_KEY}10`)
        .setDescription("Tenth tag (genre/style)")
        .setRequired(false)),


  async execute(interaction) {
    try {
      await interaction.deferReply();
      const gameName = interaction.options.getString(GAME_NAME_ARG_KEY);

      let lowerPlayerBound = interaction.options.getInteger(LOWER_PLAYER_BOUND_ARG_KEY);
      let upperPlayerBound = interaction.options.getInteger(UPPER_PLAYER_BOUND_ARG_KEY);
      if (lowerPlayerBound > upperPlayerBound) {
        const newLowerPlayerBound = upperPlayerBound;
        upperPlayerBound = lowerPlayerBound;
        lowerPlayerBound = newLowerPlayerBound;
      }

      let tags:Tag[] = [];
      for (let i = 1; i <= 10; i++) {
        const tagName = interaction.options.getString(`${TAG_ARG_KEY}${i}`);
        if (tagName && !tags.some(existingTag => existingTag.name.toLowerCase() === tagName.toLowerCase())) {
          const tag = Tag.build({ name: tagName })
          tags.push(tag);
        }
      }

      tags = await findOrCreateTags(tags);

      const gameCreationVals:Game = Game.build({
        name: gameName,
        lowerPlayerBound: lowerPlayerBound,
        upperPlayerBound: upperPlayerBound
      });

      let game:Game;
      const games = await getGames();
      if (!games.some(game => game.name.toLowerCase() === gameName.toLowerCase())) {
        try {
          game = await insertGame(gameCreationVals, tags);
        } catch (error) {
          console.log(error);
          if (error.name === "SequelizeUniqueConstraintError") {
            return interaction.editReply(`Game ${gameName} already exists.`);
          }

          return interaction.editReply(`Something went wrong with adding game ${gameName}.`);
        }
      } else {
        interaction.editReply(`${gameName} already exists, delete the existing entry before adding a new instance of it`);
        return;
      }

      interaction.editReply(`Successfully saved ${gameToString(game)}`);
    } catch (exception) {
      console.log(exception);
      interaction.editReply(`Failed to add game due to encountered error: ${exception}`);
    }
  }
}