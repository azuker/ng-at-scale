import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OverlayComponent } from './components/overlay/overlay.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { VerticalItemsPresenterComponent } from './components/layout/vertical-items-presenter.component';
import { TabsPresenterDirective } from './components/tabs/tabs-presenter.directive';

@NgModule({
  declarations: [
    OverlayComponent,
    TabsComponent,
    TabComponent,
    TabsPresenterDirective,
    VerticalItemsPresenterComponent,
  ],
  exports: [
    OverlayComponent,
    TabsComponent,
    TabComponent,
    TabsPresenterDirective,
    VerticalItemsPresenterComponent,
  ],
  imports: [ CommonModule ],
})
export class ZukNgLibModule { }
