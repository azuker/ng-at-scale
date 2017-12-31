import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class Tab1Component {
  @Input() header: {} | string;
  @Input() selected: boolean;
}
