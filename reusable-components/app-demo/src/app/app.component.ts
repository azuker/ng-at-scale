import { Component } from '@angular/core';
import { Game } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  demo: 'cards' | 'tabs' | 'select' = 'select';
}
