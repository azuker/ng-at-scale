import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZukNgLibModule } from 'zuker-ngscale-ngcomponentlib';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ZukNgLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
