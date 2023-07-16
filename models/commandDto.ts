import { SlashCommandBuilder } from "discord.js";

export interface CommandDto {
    helpText?: string,
    data:Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">,
    execute:(any) => Promise<void>,
}