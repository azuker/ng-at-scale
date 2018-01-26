import { Component, OnInit, EventEmitter, Output, DoCheck, OnDestroy, NgZone, Input, ApplicationRef } from '@angular/core';

declare var AmCharts: any;

@Component({
  selector: 'app-ammap',
  templateUrl: './ammap.component.html',
  styleUrls: ['./ammap.component.css']
})
export class AmmapComponent implements OnInit, OnDestroy, DoCheck {
  private map: any;
  selectedItem: string;
  cdCycles = 0;
  @Input() zoneExcluded = true;
  @Input() showCounter = false;

  @Output() selectedItemChanged = new EventEmitter<string>();

  constructor(private zone: NgZone, private app: ApplicationRef) { }

  ngOnInit() {
    if (this.zoneExcluded) {
      this.zone.runOutsideAngular(() => this.initMap());
    } else {
      this.initMap();
    }
  }

  ngDoCheck() {
    this.cdCycles++;
  }

  private initMap() {
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
    if (this.zoneExcluded) {
      this.zone.runGuarded(() => this.syncSelection(value));
    } else {
      this.syncSelection(value);
    }
  }

  private syncSelection(value: string) {
    this.selectedItem = value;
    this.selectedItemChanged.emit(this.selectedItem);
  }
}
