import { Component } from '@angular/core';
import { Tabs3Component } from './tabs/tabs.component';

@Component({
    selector: 'app-tabs-demo',
    templateUrl: './tabs-demo.component.html',
    styleUrls: [ './tabs-demo.component.css' ],
})
export class TabsDemo3Component {
    photoPrefix = '../../../assets/images/';
    dynamicTabs = [
        { header: 'Tab 1', content: 'Tab 1 Content' },
        { header: 'Tab 2', content: 'Tab 2 Content' },
        { header: 'Tab 3', content: 'Tab 3 Content' },
    ];

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

    addTab() {
        const number = this.dynamicTabs.length + 1;
        this.dynamicTabs.push({ header: `Tab ${number}`, content: `Tab ${number} content` });
    }
}
