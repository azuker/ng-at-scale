import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../../../models/model';
import { slideTopDownAnimation } from '../../animations';

@Component({
  selector: 'game-card-overlay',
  templateUrl: './game-card-overlay.component.html',
  styleUrls: ['./game-card-overlay.component.css'],
  animations: [ slideTopDownAnimation ],
})
export class GameCardOverlayComponent {

  teamPhotoPrefix = '../../../../assets/images/';
  overlayActive = false;

  @Input() game: Game;
  @Output() playClicked = new EventEmitter<Game>();

  toggleOverlay(value?: boolean) {
    this.overlayActive = value == null ? !this.overlayActive : value;
  }

  get isOver(): boolean {
    return this.game == null ? null : this.game.date < new Date();
  }

  onPlayClicked() {
    this.playClicked.emit(this.game);
  }
}
