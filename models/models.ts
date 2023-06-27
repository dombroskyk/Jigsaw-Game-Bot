import { IGame, GameCreationAttributes, GamesTableDefinition, GAMES_TABLE_NAME } from "./game";

export interface SteamGame {
    id: number;
    steamId: number;
    appId: number;
};

export interface SteamUser {
    id?: number;
    discordId: string;
    steamId: string;
};

export interface Tag {
    id?: number;
    name: string;
};

export { IGame, GamesTableDefinition, GAMES_TABLE_NAME, GameCreationAttributes };