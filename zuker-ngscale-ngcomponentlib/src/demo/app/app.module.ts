import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ZukNgLibModule } from 'zuker-ngscale-ngcomponentlib';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, ZukNgLibModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
