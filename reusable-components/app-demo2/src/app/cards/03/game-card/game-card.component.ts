import { Component, Input, OnChanges } from '@angular/core';
import { Game } from '../../../models/model';

@Component({
  selector: 'app-game-card3',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCard3Component {
  teamPhotoPrefix = '../../../../assets/images/';
  @Input() game: Game;
  @Input() set data(value: Game) {
    this.game = value;
  }
}
