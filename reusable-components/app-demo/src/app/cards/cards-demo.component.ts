import { Component } from '@angular/core';
import { Game } from '../models/model';

@Component({
    selector: 'app-cards-demo',
    template: `
        <game-cards-list
            [games]="games"
            (playClicked)="onPlayClicked($event)"></game-cards-list>
    `,
})
export class CardsDemoComponent {
    games: Game[];

    constructor() {
        const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
        const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));

        this.games = [
          {
            awayTeam: {
              name: 'Boston',
              imageName: 'BOS.svg'
            },
            homeTeam: {
              name: 'Charlotte',
              imageName: 'CHA.svg'
            },
            awayScore: 95,
            homeScore: 98,
            date: yesterday
          },
          {
            awayTeam: {
              name: 'Charlotte',
              imageName: 'CHA.svg'
            },
            homeTeam: {
              name: 'Boston',
              imageName: 'BOS.svg'
            },
            date: tomorrow
          }
        ];
    }

    onPlayClicked(game: Game) {
        console.log(game);
    }
}
