import { BaseCommand } from "./command";

export type CommandDictionary = {
    [commandName: string]: BaseCommand;
}