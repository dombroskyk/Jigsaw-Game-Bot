import { SlashCommandBuilder } from "discord.js";

export interface CommandDto {
    data:Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">,
    execute:(any) => Promise<void>,
}