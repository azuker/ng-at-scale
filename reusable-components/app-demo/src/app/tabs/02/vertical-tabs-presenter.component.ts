import { Component, TemplateRef, Input, EventEmitter } from '@angular/core';
import { Tabs2Component } from './tabs/tabs.component';
import { Tab2Component } from './tab/tab.component';

@Component({
    selector: 'app-vertical-tabs-presenter',
    template: `
        <div class="tabs">
            <button *ngFor="let tab of selector?.tabs"
                    (click)="selectTabEmitter.emit(tab)"
                    [ngClass]="{ selected: selector.selectedTab === tab }"
                    class="tablinks">
                <ng-container *ngTemplateOutlet="selector.tabHeaderTemplate; context: { $implicit: tab }"></ng-container>
            </button>
        </div>
    `,
    styles: [
        `
            .tabs {
                float: left;
                border: 1px solid #ccc;
                background-color: #f1f1f1;
                width: 30%;
                height: 300px;
            }

            .tablinks {
                display: block;
                background-color: inherit;
                color: black;
                padding: 22px 16px;
                width: 100%;
                border: none;
                outline: none;
                text-align: left;
                cursor: pointer;
                transition: 0.3s;
            }

            .tablinks:hover {
                background-color: #ddd;
            }

            .selected {
                background-color: #ccc;
            }

            .tabcontent {
                float: left;
                padding: 0px 12px;
                border: 1px solid #ccc;
                width: 70%;
                border-left: none;
                height: 300px;
            }
        `,
    ],
})
export class VerticalTabsPresenter2Component {
    @Input() selector: Tabs2Component;
    @Input() selectTabEmitter: EventEmitter<Tab2Component>;
}
