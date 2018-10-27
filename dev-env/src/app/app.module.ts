import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserManagementModule } from '@base-app-toolbox/user-management';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
