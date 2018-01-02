import { Component, TemplateRef, Input, EventEmitter } from '@angular/core';
import { Tabs3Component } from './tabs/tabs.component';
import { Tab3Component } from './tab/tab.component';

@Component({
    selector: 'app-vertical-tabs-presenter3',
    template: `
        <div class="tabs">
            <ng-container *ngFor="let tab of selector?.tabs">
                <ng-container *ngTemplateOutlet="selector.tabHeaderTemplate; context: { $implicit: tab }"></ng-container>
            </ng-container>
        </div>
    `,
    styleUrls: [ './vertical-tabs-presenter.component.css' ],
})
export class VerticalTabsPresenter3Component {
    @Input() selector: Tabs3Component;
    @Input() selectTabEmitter: EventEmitter<Tab3Component>;
}
