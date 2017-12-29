export interface Team {
    name: string;
    imageName: string;
}

export interface Game {
    awayTeam: Team;
    homeTeam: Team;
    date: Date;
    homeScore?: number;
    awayScore?: number;
}
