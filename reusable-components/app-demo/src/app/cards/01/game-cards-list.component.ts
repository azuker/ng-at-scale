import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Game } from '../../models/model';

@Component({
    selector: 'game-cards-list',
    template: `
        <h1>Game Cards 01</h1>
        <div class="cards-container">
            <game-card-overlay *ngFor="let g of games"
                [game]="g"
                (playClicked)="onPlayClicked($event)">
            </game-card-overlay>
        </div>
    `,
    styles: [ '.cards-container { display: flex; justify-content: space-around; }' ],
})
export class GameCardsListComponent {
    @Input() games: Game[] = [];
    @Output() playClicked = new EventEmitter<Game>();

    onPlayClicked(game: Game) {
        this.playClicked.emit(game);
    }
}
