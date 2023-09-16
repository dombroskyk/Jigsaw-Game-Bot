import { SlashCommandBuilder, SlashCommandSubcommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "discord.js";

export interface BaseCommand {
    helpText?: string,
    execute: (any) => Promise<void>,
    autocomplete?: (any) => Promise<void>,
}

export interface ICommand extends BaseCommand {
    data: Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">,
}

export interface IParentCommand extends BaseCommand {
    data: SlashCommandSubcommandsOnlyBuilder,
}

export interface ISubcommand extends BaseCommand {
    data: SlashCommandSubcommandBuilder,
}

export class Command { }