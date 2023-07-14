

export class GetGamesFilter {
    numPlayers: number;
    yesTags: string[];
    noTags: string[];
    games: string[];

    constructor(numPlayers: number) {
        this.numPlayers = numPlayers;
        this.yesTags = [];
        this.noTags = [];
        this.games = [];
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