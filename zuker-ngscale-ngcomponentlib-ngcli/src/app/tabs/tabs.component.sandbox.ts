import { sandboxOf } from 'angular-playground';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { TabsPresenterDirective } from './tabs/tabs-presenter.directive';

export default sandboxOf(TabsComponent,
    {
        declarations: [
            TabComponent,
            TabsPresenterDirective,
        ]
    })
    .add('simple tabs', {
        template: `
            <h1>Simple Tabs</h1>
            <zuknglib-tabs>
                <zuknglib-tab header="Sample 1">
                    Tab 1 content
                </zuknglib-tab>
                <zuknglib-tab header="Sample 2" [selected]="true">
                    Tab 2 content
                </zuknglib-tab>
            </zuknglib-tabs>
        `,
    })
    .add('wizard tabs', {
        template: `
            <h1>Wizard Tabs</h1>
            <zuknglib-tabs [contentTemplate]="wizardTabContentTemplate" #tabs>
                <ng-container *zuknglibTabsPresenter></ng-container>
                <zuknglib-tab [selected]="true" header="Name Tab" #nameTab>
                    Enter your name: <input />
                </zuknglib-tab>
                <zuknglib-tab header="Address Tab" #addressTab>
                    Enter your address: <input />
                </zuknglib-tab>
            </zuknglib-tabs>
            <ng-template #wizardTabContentTemplate>
                <div>
                    <ng-container *ngTemplateOutlet="tabs.tabsContentTemplate"></ng-container><br/>
                    <button (click)="onWizardNextStep(tabs)">
                        {{ tabs.selectedTab === nameTab ? 'Next' : 'Done' }}
                    </button>
                </div>
            </ng-template>
        `,
        context: {
            onWizardNextStep(tabs: TabsComponent) {
                const tabIndex = tabs.tabs.toArray().findIndex(t => t === tabs.selectedTab);

                const tabToSelect = tabIndex === tabs.tabs.length - 1
                    ? tabs.tabs.first
                    : tabs.tabs.toArray()[tabIndex + 1];

                tabs.selectTab(tabToSelect);
            }
        }
    });
