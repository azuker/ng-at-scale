import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab0',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class Tab0Component {
  @Input() header: {} | string;
  @Input() selected: boolean;
}
