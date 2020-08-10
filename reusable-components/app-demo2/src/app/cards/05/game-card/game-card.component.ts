import { Component, Input, OnChanges } from '@angular/core';
import { Game } from '../../../models/model';

@Component({
  selector: 'app-game-card5',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCard5Component {
  teamPhotoPrefix = '../../../../assets/images/';
  @Input() game: Game;
}
