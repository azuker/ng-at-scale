import { Component } from '@angular/core';
import { slideBottomUpAnimation } from '../../../animations';

@Component({
  selector: 'app-overlay4',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  animations: [ slideBottomUpAnimation ],
})
export class Overlay4Component {
  overlayActive = false;

  toggleOverlay(value?: boolean) {
    this.overlayActive = value == null ? !this.overlayActive : value;
  }
}
