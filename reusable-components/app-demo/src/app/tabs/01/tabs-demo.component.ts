import { Component } from '@angular/core';

@Component({
    selector: 'app-tabs-demo',
    template: `
        <h1>Tabs 01</h1>
        <div>
            <app-tabs1 #tabs (selectionChanged)="onSelectionChanged($event)">
                <app-tab1 header="Tab 1">Tab 1 content</app-tab1>
                <app-tab1 [selected]="true" header="Tab 2">Tab 2 content</app-tab1>
            </app-tabs1>
        </div>
        <div style="margin-top: 20px;">
            <span>selected input: {{ tabs.selectedTab?.header }}</span><br/>
            <span>selected event: {{ selectedEvent?.header }}</span>
        </div>
    `,
})
export class TabsDemo1Component {
    selectedEvent: any;

    onSelectionChanged($event) {
        this.selectedEvent = $event;
    }
}
