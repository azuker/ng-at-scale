import { Component, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { Game } from '../../../models/model';

@Component({
  selector: 'app-game-card-overlay2',
  templateUrl: './game-card-overlay2.component.html',
  styleUrls: ['./game-card-overlay2.component.css']
})
export class GameCardOverlay2Component implements OnChanges {

  overlayTopText: string;
  overlayBottomText: string;
  teamPhotoPrefix = '../../../../assets/images/';
  game: Game;
  @Output() playClicked = new EventEmitter<Game>();
  @Input() set data(value: Game) {
    this.game = value;
    this.ngOnChanges();
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
