import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { PlaygroundCommonModule } from 'angular-playground';
import { AppComponent } from 'angular-playground';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PlaygroundCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class PlaygroundModule { }
