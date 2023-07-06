import { Game, GamesTableDefinition } from "./game";
import { Tag, TagsTableDefinition } from "./tag"

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

export { Game, GamesTableDefinition };
export { Tag, TagsTableDefinition };