import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Game } from '../../models/model';
import { fadeActivatedAnimation, fadeDeactivatedAnimation } from '../animations';

@Component({
    selector: 'game-cards-list',
    templateUrl: './game-cards-list.component.html',
    styles: [ '.cards-container { display: flex; justify-content: space-around; margin-top: 30px; }' ],
})
export class GameCardsList6Component {
    @Input() games: Game[] = [];
    @Output() playClicked = new EventEmitter<Game>();

    fadeActivated = fadeActivatedAnimation;
    fadeDeactivated = fadeDeactivatedAnimation;

    onPlayClicked(game: Game) {
        this.playClicked.emit(game);
    }
}
