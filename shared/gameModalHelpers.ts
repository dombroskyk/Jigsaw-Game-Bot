import { findOrCreateTags } from "../db/sequelizeDbLayer";
import { ActionRowBuilder, CacheType, ModalActionRowComponentBuilder, ModalBuilder, ModalSubmitInteraction, TextInputBuilder, TextInputStyle } from "discord.js";
import { Game, Tag } from "../db/models/models";
import { GameModalResponse } from "../types/gameModalResponse";

const GAME_NAME_FIELD_ID = "nameInput";
const GAME_NAME_FIELD_NAME = "Name";
const LOWER_PLAYER_BOUND_FIELD_ID = "lowerPlayerBoundInput";
const LOWER_PLAYER_BOUND_FIELD_NAME = "Lower Player Bound";
const UPPER_PLAYER_BOUND_FIELD_ID = "upperPlayerBoundInput";
const UPPER_PLAYER_BOUND_FIELD_NAME = "Upper Player Bound";
const TAGS_FIELD_ID = "tagsInput";
const TAGS_FIELD_NAME = "Tags (comma separated list)"

export function buildGameModal(modalId: string, game?: Game): ModalBuilder {
    const modalTitleFriendlyName = game?.name?.length ?? 0 > 40 ? `${game?.name.slice(0, 37)}...` : game?.name;
    const modalTitle = game === null || typeof game === "undefined" ? 'Add Game' : `Edit ${modalTitleFriendlyName}`;

    const modal = new ModalBuilder()
                    .setCustomId(modalId)
                    .setTitle(modalTitle);

    const gameNameRow: ActionRowBuilder<ModalActionRowComponentBuilder> = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
        new TextInputBuilder()
        .setCustomId(GAME_NAME_FIELD_ID)
        .setLabel(GAME_NAME_FIELD_NAME)
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        .setValue(game?.name ?? '')
    );

    const lowerPlayerBoundRow: ActionRowBuilder<ModalActionRowComponentBuilder> = new ActionRowBuilder<TextInputBuilder>().addComponents(
        new TextInputBuilder()
        .setCustomId(LOWER_PLAYER_BOUND_FIELD_ID)
        .setLabel(LOWER_PLAYER_BOUND_FIELD_NAME)
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        .setValue(game?.lowerPlayerBound?.toLocaleString() ?? '')
    );

    const upperPlayerBoundRow: ActionRowBuilder<ModalActionRowComponentBuilder> = new ActionRowBuilder<TextInputBuilder>().addComponents(
        new TextInputBuilder()
        .setCustomId(UPPER_PLAYER_BOUND_FIELD_ID)
        .setLabel(UPPER_PLAYER_BOUND_FIELD_NAME)
        .setStyle(TextInputStyle.Short)
        .setRequired(false)
        .setValue(game?.upperPlayerBound?.toLocaleString() ?? '')
    );

    const tagsRow = new ActionRowBuilder<TextInputBuilder>().addComponents(
        new TextInputBuilder()
        .setCustomId(TAGS_FIELD_ID)
        .setLabel(TAGS_FIELD_NAME)
        .setStyle(TextInputStyle.Short)
        .setRequired(false)
        .setValue(game?.Tags?.map(tag => tag.name).join(', ') ?? '')
    );

    modal.addComponents(gameNameRow, lowerPlayerBoundRow, upperPlayerBoundRow, tagsRow);

    return modal;
}

export async function handleGameModalInteraction(modalInteraction: ModalSubmitInteraction<CacheType>): Promise<GameModalResponse> {
    const newName = modalInteraction.fields.getTextInputValue(GAME_NAME_FIELD_ID);
    const newLowerPlayerBound = parseInt(modalInteraction.fields.getTextInputValue(LOWER_PLAYER_BOUND_FIELD_ID), 10);
    const inputUpperPlayerBound = modalInteraction.fields.getTextInputValue(UPPER_PLAYER_BOUND_FIELD_ID);
    let newTags = modalInteraction.fields.getTextInputValue(TAGS_FIELD_ID).trim().split(',').filter(x => x !== "");

    let newUpperPlayerBound: number | null = null;
    if (inputUpperPlayerBound !== '') {
      newUpperPlayerBound = parseInt(inputUpperPlayerBound, 10);
    }

    const tags = await findOrCreateTags(newTags.map(newTag => Tag.build({ name: newTag.trim() })));

    return {
        name: newName,
        lowerPlayerBound: newLowerPlayerBound,
        upperPlayerBound: newUpperPlayerBound,
        tags: tags
    };
}