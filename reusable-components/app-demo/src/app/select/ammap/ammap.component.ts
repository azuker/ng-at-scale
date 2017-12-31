import { Component, OnInit, EventEmitter, Output } from '@angular/core';
declare var AmCharts: any;

@Component({
  selector: 'app-ammap',
  templateUrl: './ammap.component.html',
  styleUrls: ['./ammap.component.css']
})
export class AmmapComponent implements OnInit {

  selectedItem: string;
  @Output() selectedItemChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    const self = this;
    const map = AmCharts.makeChart('chartdiv', {
      'type': 'map',
      'theme': 'light',
      'dataProvider': {
        'map': 'worldLow',
        'getAreasFromMap': true
      },
      'areasSettings': {
        'autoZoom': true,
        'selectedColor': '#CC0000'
      },
      'listeners': [
        {
          'event': 'clickMapObject',
          'method': function(e) {
            self.setSelection(e.mapObject.title);
          }
        }]
    });
  }

  private setSelection(value: string) {
    this.selectedItem = value;
    this.selectedItemChanged.emit(this.selectedItem);
  }
}
