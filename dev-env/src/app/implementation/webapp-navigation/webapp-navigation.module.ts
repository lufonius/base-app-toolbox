import { NgModule } from '@angular/core';
import { WebappNavigationComponent } from './webapp-navigation.component';
import { NavigationModule } from '../store';
import { BATLayoutModule } from '@base-app-toolbox/layout';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
 imports: [
   CommonModule,
   FormsModule,
   NavigationModule,
   BATLayoutModule,
 ],
 exports: [
   WebappNavigationComponent
 ],
 declarations: [
   WebappNavigationComponent
 ],
 providers: [],
})
export class WebappNavigationModule { }
