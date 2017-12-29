import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Game } from '../../models/model';
import { fadeAnimation } from '../../animations';

@Component({
    selector: 'game-cards-list',
    template: `
        <div class="cards-container">
            <app-overlay5 *ngFor="let g of games; let first=first"
                           [overlayAnimationKind]="first ? 'topToBottom' : 'leftToRight'">
                <app-game-card5 [game]="g"></app-game-card5>
                <app-game-card-overlay5 [game]="g"
                    (playClicked)="onPlayClicked($event)" overlay></app-game-card-overlay5>
            </app-overlay5>
        </div>
        <div class="cards-container">
            <app-overlay5 overlayAnimationKind="custom" #overlay>
                <app-game-card5 [game]="games[0]"></app-game-card5>
                <app-game-card-overlay5 [game]="games[0]"
                    [@overlayAnimation]="overlay.customActive.toString()"
                    (playClicked)="onPlayClicked($event)" overlay></app-game-card-overlay5>
            </app-overlay5>
        </div>
    `,
    styles: [ '.cards-container { display: flex; justify-content: space-around; margin-top: 30px; }' ],
    animations: [ fadeAnimation ],
})
export class GameCardsList5Component {
    @Input() games: Game[] = [];
    @Output() playClicked = new EventEmitter<Game>();

    onPlayClicked(game: Game) {
        this.playClicked.emit(game);
    }
}
