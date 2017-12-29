import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Game } from '../../models/model';

@Component({
    selector: 'game-cards-list',
    template: `
        <div class="cards-container">
            <app-overlay6 *ngFor="let g of games; let first=first"
                          [customTrigger]="true"
                          [overlayAnimationKind]="first ? 'topToBottom' : 'leftToRight'"
                          #trigger="appOverlay6">
                <app-game-card6 [game]="g" (click)="trigger.toggleOverlay(true)"></app-game-card6>
                <app-game-card-overlay6 [game]="g"
                    (click)="trigger.toggleOverlay(false)"
                    (playClicked)="onPlayClicked($event)" overlay></app-game-card-overlay6>
            </app-overlay6>
        </div>
    `,
    styles: [ '.cards-container { display: flex; justify-content: space-around; }' ],
})
export class GameCardsList6Component {
    @Input() games: Game[] = [];
    @Output() playClicked = new EventEmitter<Game>();

    onPlayClicked(game: Game) {
        this.playClicked.emit(game);
    }
}
