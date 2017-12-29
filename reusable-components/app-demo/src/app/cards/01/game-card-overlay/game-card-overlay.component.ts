import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Game } from '../../../models/model';
import { slideBottomUpAnimation } from '../../../animations';

@Component({
  selector: 'game-card-overlay',
  templateUrl: './game-card-overlay.component.html',
  styleUrls: ['./game-card-overlay.component.css'],
  animations: [ slideBottomUpAnimation ],
})
export class GameCardOverlayComponent implements OnChanges {

  teamPhotoPrefix = '../../../../assets/images/';
  overlayActive = false;
  overlayTopText: string;
  overlayBottomText: string;

  @Input() game: Game;
  @Output() playClicked = new EventEmitter<Game>();

  toggleOverlay(value?: boolean) {
    this.overlayActive = value == null ? !this.overlayActive : value;
  }

  ngOnChanges() {
    if (this.game == null) {
      this.overlayTopText = null;
      this.overlayBottomText = null;
    } else if (this.game.date < new Date()) {
      this.overlayTopText = 'Game has Ended';
      this.overlayBottomText = 'Watch Game';
    } else {
      this.overlayTopText = 'Game has not Begun';
      this.overlayBottomText = 'Preview';
    }
  }

  onPlayClicked() {
    this.playClicked.emit(this.game);
  }
}
