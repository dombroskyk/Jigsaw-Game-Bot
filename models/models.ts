import { Game, GamesTableDefinition } from "./game";
import { Tag, TagsTableDefinition } from "./tag"
import { UserPlatformMapping, UserPlatformMappingsTableDefinition } from "./userPlatformMapping";

export interface SteamGame {
    id: number;
    steamId: number;
    appId: number;
};

export { UserPlatformMapping, UserPlatformMappingsTableDefinition };
export { Game, GamesTableDefinition };
export { Tag, TagsTableDefinition };