import { Tag } from "../db/models/models";

export interface GameModalResponse {
    name: string,
    lowerPlayerBound: number | null,
    upperPlayerBound: number | null,
    tags: Tag[],
}