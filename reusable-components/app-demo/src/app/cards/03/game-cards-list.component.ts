import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Game } from '../../models/model';
import { GameCardOverlay3Component } from './game-card-overlay/game-card-overlay.component';
import { GameCard3Component } from './game-card/game-card.component';

@Component({
    selector: 'game-cards-list',
    template: `
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
export class GameCardsList3Component {
    cardComponentType = GameCard3Component;
    overlayComponentType = GameCardOverlay3Component;

    @Input() games: Game[] = [];
    @Output() playClicked = new EventEmitter<Game>();

    onPlayClicked(game: Game) {
        this.playClicked.emit(game);
    }
}
