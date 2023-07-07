import { Game, GamesTableDefinition } from "./game";
import { Tag, TagsTableDefinition } from "./tag"
import { SteamUser, SteamUsersTableDefinition } from "./steamUser";

export interface SteamGame {
    id: number;
    steamId: number;
    appId: number;
};

export { SteamUser, SteamUsersTableDefinition };
export { Game, GamesTableDefinition };
export { Tag, TagsTableDefinition };