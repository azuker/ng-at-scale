import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CardsDemoComponent } from './cards/cards-demo.component';
import { GameCardOverlayComponent } from './cards/01/game-card-overlay/game-card-overlay.component';
import { GameCardsListComponent } from './cards/game-cards-list.component';
import { OverlayDynamicComponent } from './cards/02/overlay-dynamic/overlay-dynamic.component';
import { GameCardOverlay2Component } from './cards/02/game-card-overlay2/game-card-overlay2.component';
import { GameCard2Component } from './cards/02/game-card2/game-card2.component';
import { GameCardOverlay3Component } from './cards/03/game-card-overlay/game-card-overlay.component';
import { GameCard3Component } from './cards/03/game-card/game-card.component';
import { OverlayDynamic3Component } from './cards/03/overlay-dynamic/overlay-dynamic.component';
import { Overlay4Component } from './cards/04/overlay/overlay.component';
import { GameCard4Component } from './cards/04/game-card/game-card.component';
import { GameCardOverlay4Component } from './cards/04/game-card-overlay/game-card-overlay.component';
import { Overlay5Component } from './cards/05/overlay/overlay.component';
import { GameCard5Component } from './cards/05/game-card/game-card.component';
import { GameCardOverlay5Component } from './cards/05/game-card-overlay/game-card-overlay.component';
import { Overlay6Component } from './cards/06/overlay/overlay.component';
import { GameCard6Component } from './cards/06/game-card/game-card.component';
import { GameCardOverlay6Component } from './cards/06/game-card-overlay/game-card-overlay.component';

import { TabsDemoComponent } from './tabs/tabs-demo.component';
import { Tabs1Component } from './tabs/01/tabs/tabs.component';
import { Tab1Component } from './tabs/01/tab/tab.component';
import { Tabs2Component } from './tabs/02/tabs/tabs.component';
import { Tab2Component } from './tabs/02/tab/tab.component';
import { TabsPresenter2Directive } from './tabs/02/tabs/tabs-presenter.directive';
import { VerticalTabsPresenter2Component } from './tabs/02/vertical-tabs-presenter.component';
import { Tabs3Component } from './tabs/03/tabs/tabs.component';
import { Tab3Component } from './tabs/03/tab/tab.component';
import { TabsPresenter3Directive } from './tabs/03/tabs/tabs-presenter.directive';
import { VerticalTabsPresenter3Component } from './tabs/03/vertical-tabs-presenter.component';
import { ReusableSelectComponent } from './select/reusable-select/reusable-select.component';
import { SelectDemoComponent } from './select/select-demo/select-demo.component';
import { AmmapComponent } from './select/ammap/ammap.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsDemoComponent,
    GameCardsListComponent,
    GameCardOverlayComponent,
    OverlayDynamicComponent,
    GameCardOverlay2Component,
    GameCard2Component,
    OverlayDynamic3Component,
    GameCard3Component,
    GameCardOverlay3Component,
    Overlay4Component,
    GameCard4Component,
    GameCardOverlay4Component,
    Overlay5Component,
    GameCard5Component,
    GameCardOverlay5Component,
    Overlay6Component,
    GameCard6Component,
    GameCardOverlay6Component,

    TabsDemoComponent,
    Tabs1Component,
    Tab1Component,
    Tabs2Component,
    Tab2Component,
    TabsPresenter2Directive,
    VerticalTabsPresenter2Component,
    Tabs3Component,
    Tab3Component,
    TabsPresenter3Directive,
    VerticalTabsPresenter3Component,
    ReusableSelectComponent,
    SelectDemoComponent,
    AmmapComponent,
  ],
  entryComponents: [
    GameCardOverlay2Component,
    GameCard2Component,
    GameCard3Component,
    GameCardOverlay3Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
