import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Game } from '../../../models/model';

@Component({
  selector: 'app-game-card-overlay6',
  templateUrl: './game-card-overlay.component.html',
  styleUrls: ['./game-card-overlay.component.css']
})
export class GameCardOverlay6Component {
  teamPhotoPrefix = '../../../../assets/images/';
  @Input() game: Game;
  @Output() playClicked = new EventEmitter<Game>();

  get isOver(): boolean {
    return this.game == null ? null : this.game.date < new Date();
  }

  onPlayClicked(event) {
    this.playClicked.emit(this.game);
    event.stopPropagation();
  }
}
