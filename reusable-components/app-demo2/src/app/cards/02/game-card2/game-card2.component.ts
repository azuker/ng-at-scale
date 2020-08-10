import { Component, Input, OnChanges } from '@angular/core';
import { Game } from '../../../models/model';

@Component({
  selector: 'app-game-card2',
  templateUrl: './game-card2.component.html',
  styleUrls: ['./game-card2.component.css']
})
export class GameCard2Component {
  teamPhotoPrefix = '../../../../assets/images/';
  @Input() game: Game;
  @Input() set data(value: Game) {
    this.game = value;
  }
}
