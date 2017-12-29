import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GameCardOverlayComponent } from './cards/01/game-card-overlay/game-card-overlay.component';
import { GameCardsListComponent } from './cards/game-cards-list.component';
import { OverlayDynamicComponent } from './cards/02/overlay-dynamic/overlay-dynamic.component';
import { GameCardOverlay2Component } from './cards/02/game-card-overlay2/game-card-overlay2.component';
import { GameCard2Component } from './cards/02/game-card2/game-card2.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCardOverlayComponent,
    GameCardsListComponent,
    OverlayDynamicComponent,
    GameCardOverlay2Component,
    GameCard2Component
  ],
  entryComponents: [
    GameCardOverlay2Component,
    GameCard2Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
