import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Game } from '../../models/model';

@Component({
    selector: 'game-cards-list',
    template: `
        <h1>Game Cards 04</h1>
        <div class="cards-container">
            <app-overlay4 *ngFor="let g of games">
                <app-game-card4 [game]="g"></app-game-card4>
                <app-game-card-overlay4 [game]="g"
                    (playClicked)="onPlayClicked($event)" overlay></app-game-card-overlay4>
            </app-overlay4>
        </div>
    `,
    styles: [ '.cards-container { display: flex; justify-content: space-around; }' ],
})
export class GameCardsList4Component {
    @Input() games: Game[] = [];
    @Output() playClicked = new EventEmitter<Game>();

    onPlayClicked(game: Game) {
        this.playClicked.emit(game);
    }
}
