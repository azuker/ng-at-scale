import {
  Component,
  OnInit,
  DoCheck,
  ChangeDetectorRef,
  NgZone,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
} from '@angular/core';
import { environment } from '../environments/environment';

declare const Stats: any;
declare const ng: any;

const LOCATIONS = ['bottom-right', 'bottom-left', 'top-left', 'top-right'];

@Component({
  selector: 'app-perf',
  template: `
    <div
      *ngIf="enabled"
      [ngClass]="['card', location]"
    >
      <div class="location-toggle">
        <button (click)="onDisplayToggle()">-</button>
        <button (click)="onLocationToggle()">■</button>
      </div>
      <div [ngClass]="{'graphs-container': true, hidden: hidden}" #graphs></div>
      <div [class.hidden]="hidden">
        <div class="field">
          <span class="field-title"><a (click)="profile($event)">Run Profiler</a></span>
          <span class="field-value">{{ profCDCount | number:'1.0' }}cycles / AVG: {{ profCDAvg | number:'1.2-2' }}ms</span>
        </div>
        <div class="field">
          <span class="field-title">Change detection cycles</span>
          <span class="field-value">{{ cdCount | number:'1.0' }}</span>
        </div>
        <div class="field">
          <span class="field-title">setTimeout while in Zone</span>
          <span class="field-value">{{ zoneTimeouts | number:'1.0' }}</span>
        </div>
        <div class="field">
          <span class="field-title">setInterval while in Zone</span>
          <span class="field-value">{{ zoneIntervals | number:'1.0' }}</span>
        </div>
        <div class="field" *ngIf="monitorMemory">
          <span class="field-title">usedJSHeapSize since last CD</span>
          <span class="field-value">{{ usedJSHeapSize | number:'1.2-2' }} MB</span>
        </div>
      </div>
    </div>`,
  styles: [
    `
    .hidden {
      display: none;
    }
    .location-toggle {
      position: absolute;
      top: 0;
      right: 0;
    }
    .location-toggle > button {
      background-color: lightyellow;
    }
    .card {
      font-size: xx-small;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      background-color: ghostwhite;
      padding: 20px 10px 20px 10px;
      border: 0.5px solid lightgray;
      border-radius: 0.3rem;
      margin: 0;
      display: flex;
      align-items: center;
      z-index: 9999;
    }
    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    .field {
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
    }
    .field-title {
      font-weight: bold;
      margin-right: 5px;
    }
    .field-title > a {
      cursor: pointer;
    }
    .field-value {
      text-align: right;
    }
    .graphs-container {
      margin-right: 10px;
    }
    .top-left {
      position: fixed;
      top: 15px;
      left: 15px;
    }
    .top-right {
      position: fixed;
      top: 15px;
      right: 15px;
    }
    .bottom-left {
      position: fixed;
      bottom: 15px;
      left: 15px;
    }
    .bottom-right {
      position: fixed;
      bottom: 15px;
      right: 15px;
    }`,
  ],
})
export class PerfComponent implements DoCheck, OnInit, AfterViewInit {
  @Input() filterTimers = true;
  cdCount = 0;
  usedJSHeapSize = 0;
  zoneTimeouts = 0;
  zoneIntervals = 0;
  profCDCount = 0;
  profCDAvg = 0;
  monitorMemory: boolean | undefined;
  location = LOCATIONS[0];
  hidden = false;
  @ViewChild('graphs', { static: false }) graphs: ElementRef | undefined;

  public enabled = false;

  constructor(
    private readonly zone: NgZone,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  ngDoCheck(): void {
    if (!this.enabled) {
      return;
    }

    this.cdCount++;
    if (this.monitorMemory) {
      this.usedJSHeapSize = (window.performance as any).memory.usedJSHeapSize / 1024 / 1024;
    }
  }

  loadSettings() {
    this.location = localStorage.getItem('perf-viewer-location') || LOCATIONS[0];
    this.hidden = !!localStorage.getItem('perf-viewer-hidden');
  }

  saveSettings() {
    localStorage.setItem('perf-viewer-location', this.location);
    if (!this.hidden) {
      localStorage.removeItem('perf-viewer-hidden');
    } else {
      localStorage.setItem('perf-viewer-hidden', 'true');
    }
  }

  ngOnInit(): void {
    this.enabled = environment.perf;

    if (!this.enabled) {
      this.cdr.detach();
      return;
    }

    this.loadSettings();

    this.monitorMemory =
      window.performance && (window.performance as any).memory && (window.performance as any).memory.usedJSHeapSize;

    this.zone.runOutsideAngular(() => this.replaceTimers());
  }

  ngAfterViewInit(): void {
    if (!this.enabled) {
      return;
    }

    this.zone.runOutsideAngular(() => this.loadStats());
  }

  private loadStats() {
    if (!this.graphs) {
      return;
    }

    const script = document.createElement('script');

    const graphs = this.graphs.nativeElement;
    script.onload = () => {
      const stat = new Stats();
      stat.showPanel(2); // 0: fps, 1: ms, 2: mb, 3+: custom
      stat.domElement.style.cssText = '';
      graphs.appendChild(stat.dom);
      requestAnimationFrame(function loop() {
        stat.update();
        setTimeout(() => requestAnimationFrame(loop), 200);
      });
    };

    script.src = 'assets/scripts/stats.min.js';
    document.head.appendChild(script);
  }

  profile(event: Event) {
    if (ng && ng.profiler) {
      this.zone.runOutsideAngular(() => {
        const prof = ng.profiler.timeChangeDetection();
        this.profCDCount = prof.numTicks;
        this.profCDAvg = prof.msPerTick;
      });
    }

    event.stopPropagation();
    event.preventDefault();
  }

  private replaceTimers() {
    const to = window.setTimeout;
    const newTo = (callback: (...args: any[]) => void, ms: number, ...args: any[]) =>
      this.handleTimerCall(
        'window.setTimeout',
        () => this.zoneTimeouts++,
        () => to(callback, ms, ...args),
      );
    window.setTimeout = newTo as any;

    const it = window.setInterval;
    const newIt = (callback: (...args: any[]) => void, ms: number, ...args: any[]) =>
      this.handleTimerCall(
        'window.setInterval',
        () => this.zoneIntervals++,
        () => it(callback, ms, ...args),
      );
    window.setInterval = newIt as any;
  }

  private handleTimerCall(identifier: string, inc: () => void, next: () => number) {
    if (NgZone.isInAngularZone()) {
      if (this.filterTimers) {
        inc();
        // tslint:disable-next-line:no-console
        console.trace(`${identifier} DURING ZONE`);
      }
    }
    return next();
  }

  onLocationToggle() {
    const index = LOCATIONS.indexOf(this.location) + 1;
    this.location = index >= LOCATIONS.length ? LOCATIONS[0] : LOCATIONS[index];

    this.saveSettings();
  }

  onDisplayToggle() {
    this.hidden = !this.hidden;

    this.saveSettings();
  }
}
