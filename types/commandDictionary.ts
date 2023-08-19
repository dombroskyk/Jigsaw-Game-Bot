import { BaseCommand } from "./command";
// import { SubcommandDto } from "./subcommandDto";

// export type SubcommandDictionary = {
//     [subcommandName: string]: SubcommandDto;
// }

export type CommandDictionary = {
    [commandName: string]: BaseCommand;
}