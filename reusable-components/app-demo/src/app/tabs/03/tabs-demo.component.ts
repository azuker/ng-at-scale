import { Component } from '@angular/core';
import { Tabs3Component } from './tabs/tabs.component';

@Component({
    selector: 'app-tabs-demo',
    templateUrl: './tabs-demo.component.html',
})
export class TabsDemo3Component {
    selectedEvent1: any;
    selectedEvent2: any;
    selectedEvent3: any;

    onWizardNextStep(tabs: Tabs3Component) {
        const tabIndex = tabs.tabs.toArray().findIndex(t => t === tabs.selectedTab);

        const tabToSelect = tabIndex === tabs.tabs.length - 1
            ? tabs.tabs.first
            : tabs.tabs.toArray()[tabIndex + 1];

        tabs.selectTab(tabToSelect);
    }
}
