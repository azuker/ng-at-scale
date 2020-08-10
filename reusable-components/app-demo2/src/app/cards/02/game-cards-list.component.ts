import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Game } from '../../models/model';
import { GameCardOverlay2Component } from './game-card-overlay2/game-card-overlay2.component';
import { GameCard2Component } from './game-card2/game-card2.component';

@Component({
    selector: 'game-cards-list',
    template: `
        <h1>Game Cards 02</h1>
        <div class="cards-container">
            <app-overlay-dynamic *ngFor="let g of games"
                [cardData]="g" [overlayData]="g"
                [cardComponentType]="cardComponentType"
                [overlayComponentType]="overlayComponentType"
                (childEvents)="onPlayClicked($event.payload)">
            </app-overlay-dynamic>
        </div>
    `,
    styles: [ '.cards-container { display: flex; justify-content: space-around; }' ],
})
export class GameCardsList2Component {
    cardComponentType = GameCard2Component;
    overlayComponentType = GameCardOverlay2Component;

    @Input() games: Game[] = [];
    @Output() playClicked = new EventEmitter<Game>();

    onPlayClicked(game: Game) {
        this.playClicked.emit(game);
    }
}
