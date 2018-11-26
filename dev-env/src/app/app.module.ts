import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BATLayoutModule } from "./packages/layout/src/layout.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BATLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
