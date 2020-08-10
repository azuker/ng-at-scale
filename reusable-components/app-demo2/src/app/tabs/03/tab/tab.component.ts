import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class Tab3Component {
  @Input() header: {} | string;
  @Input() selected: boolean;
}
