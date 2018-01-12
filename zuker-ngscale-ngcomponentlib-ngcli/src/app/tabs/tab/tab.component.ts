import { Component, Input } from '@angular/core';

@Component({
  selector: 'zuknglib-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  @Input() header: {} | string;
  @Input() selected: boolean;
}
