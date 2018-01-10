import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OverlayComponent } from './components/overlay/overlay.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { VerticalItemsPresenterComponent } from './components/layout/vertical-items-presenter.component';

@NgModule({
  declarations: [
    OverlayComponent,
    TabsComponent,
    TabComponent,
    VerticalItemsPresenterComponent,
  ],
  exports: [
    OverlayComponent,
    TabsComponent,
    TabComponent,
    VerticalItemsPresenterComponent,
  ],
  imports: [ BrowserAnimationsModule ],
})
export class ZukNgLibModule { }
