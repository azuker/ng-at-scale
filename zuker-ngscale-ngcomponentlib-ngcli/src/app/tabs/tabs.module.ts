import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabsPresenterDirective } from './tabs/tabs-presenter.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TabComponent,
    TabsComponent,
    TabsPresenterDirective,
  ],
  exports: [
    TabComponent,
    TabsComponent,
    TabsPresenterDirective,
  ],
})
export class TabsModule { }
