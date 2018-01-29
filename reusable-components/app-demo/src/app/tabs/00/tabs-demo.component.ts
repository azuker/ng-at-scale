import { Component } from '@angular/core';

@Component({
    selector: 'app-tabs-demo',
    template: `
        <h1>Tabs 00</h1>
        <div>
            <app-tabs0 #tabs (selectionChanged)="onSelectionChanged($event)">
                <app-tab0 header="Tab 1">Tab 1 content</app-tab0>
                <app-tab0 [selected]="true" header="Tab 2">Tab 2 content</app-tab0>
            </app-tabs0>
        </div>
        <div style="margin-top: 20px;">
            <span>selected input: {{ tabs.selectedTab?.header }}</span><br/>
            <span>selected event: {{ selectedEvent?.header }}</span>
        </div>
    `,
})
export class TabsDemo0Component {
    selectedEvent: any;

    onSelectionChanged($event) {
        this.selectedEvent = $event;
    }
}
