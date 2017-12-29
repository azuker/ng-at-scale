import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    GameCardOverlayComponent,
    GameCardsListComponent,
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
