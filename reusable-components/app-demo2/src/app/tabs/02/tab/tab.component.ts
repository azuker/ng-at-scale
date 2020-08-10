import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class Tab2Component {
  @Input() header: {} | string;
  @Input() selected: boolean;
}
