import { Component } from '@angular/core';
import { slideTopDownAnimation } from '../../../animations';

@Component({
  selector: 'app-overlay4',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  animations: [ slideTopDownAnimation ],
})
export class Overlay4Component {
  overlayActive = false;

  toggleOverlay(value?: boolean) {
    this.overlayActive = value == null ? !this.overlayActive : value;
  }
}
