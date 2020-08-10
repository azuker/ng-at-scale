import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Game } from '../../../models/model';

@Component({
  selector: 'app-game-card-overlay2',
  templateUrl: './game-card-overlay2.component.html',
  styleUrls: ['./game-card-overlay2.component.css']
})
export class GameCardOverlay2Component {
  teamPhotoPrefix = '../../../../assets/images/';
  game: Game;
  @Output() playClicked = new EventEmitter<Game>();
  @Input() set data(value: Game) {
    this.game = value;
  }

  get isOver(): boolean {
    return this.game == null ? null : this.game.date < new Date();
  }

  onPlayClicked() {
    this.playClicked.emit(this.game);
  }
}
