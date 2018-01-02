import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
declare var AmCharts: any;

@Component({
  selector: 'app-ammap',
  templateUrl: './ammap.component.html',
  styleUrls: ['./ammap.component.css']
})
export class AmmapComponent implements OnInit, OnDestroy {
  private map: any;
  selectedItem: string;
  @Output() selectedItemChanged = new EventEmitter<string>();

  ngOnInit() {
    const self = this;
    this.map = AmCharts.makeChart('chartdiv', {
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

  ngOnDestroy() {
    AmCharts.makeChart.destroyChart(this.map);
  }

  private setSelection(value: string) {
    this.selectedItem = value;
    this.selectedItemChanged.emit(this.selectedItem);
  }
}
