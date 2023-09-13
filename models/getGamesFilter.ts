

export class GetGamesFilter {
    numPlayers: number | null;
    yesTags: string[];
    noTags: string[];
    games: string[];

    constructor(numPlayers: number | null = null) {
        this.numPlayers = numPlayers;
        this.yesTags = [];
        this.noTags = [];
        this.games = [];
    }

    addNumPlayersFilter(numPlayers: number): void {
        this.numPlayers = numPlayers;
    }

    addGameFilter(gameName: string): void {
        this.games.push(gameName);
    }

    addTagFilter(tag: string, intention: string): void {
        if (intention.toLocaleLowerCase().localeCompare("yes") === 0) {
            this.yesTags.push(tag);
        } else {
            this.noTags.push(tag);
        }
    }
}