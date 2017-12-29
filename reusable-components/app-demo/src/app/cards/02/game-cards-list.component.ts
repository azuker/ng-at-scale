import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Game } from '../../models/model';
import { GameCardOverlay2Component } from './game-card-overlay2/game-card-overlay2.component';
import { GameCard2Component } from './game-card2/game-card2.component';

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
export class GameCardsListComponent {
    cardComponentType = GameCard2Component;
    overlayComponentType = GameCardOverlay2Component;

    @Input() games: Game[] = [];
    @Output() playClicked = new EventEmitter<Game>();

    onPlayClicked(game: Game) {
        this.playClicked.emit(game);
    }
}
