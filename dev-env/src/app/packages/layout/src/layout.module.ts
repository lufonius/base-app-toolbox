import { NgModule } from '@angular/core';

import {
  BATWebappNavigationComponent,
  BATDefaultElementComponent,
  BATDefaultHeadingComponent,
  BATWebappNavigationElementComponent,
  BATWebappNavigationHeadingComponent,
  BATCloseComponent
} from './webapp-navigation/components/webapp-navigation';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';
import { BATCommonModule } from "../../common/common.module";
import { FooterComponent } from './webapp-navigation/components/webapp-navigation/footer/footer.component';


const WEBAPP_NAVIGATION_IMPORTS = [
  BATWebappNavigationComponent,
  BATWebappNavigationHeadingComponent,
  BATDefaultHeadingComponent,
  BATWebappNavigationElementComponent,
  BATDefaultElementComponent,
  BATCloseComponent
];

const WEBAPP_NAVIGATION_EXPORTS = [
  BATWebappNavigationComponent,
  BATWebappNavigationHeadingComponent,
  BATWebappNavigationElementComponent
];

@NgModule({
 imports: [
   BATCommonModule,
   FlexLayoutModule,
   CommonModule,
   FormsModule,
   MatIconModule
 ],
 exports: [
   ...WEBAPP_NAVIGATION_EXPORTS
 ],
 declarations: [
   ...WEBAPP_NAVIGATION_IMPORTS,
   FooterComponent
 ],
  entryComponents: [
    BATDefaultHeadingComponent,
    BATDefaultElementComponent
  ],
 providers: [],
})
export class BATLayoutModule { }
