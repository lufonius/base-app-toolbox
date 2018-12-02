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
import { BATWebappNavigationFooterComponent } from './webapp-navigation/components/webapp-navigation/footer/footer.component';
import { BATHeaderGeneratorDirective } from './webapp-navigation/components/webapp-navigation/header-generator.directive';
import { BATNavElementGeneratorDirective } from './webapp-navigation/components/webapp-navigation/nav-element-generator.directive';
import { BATCoreModule } from "@base-app-toolbox/core";


const WEBAPP_NAVIGATION_IMPORTS = [
  BATWebappNavigationComponent,
  BATWebappNavigationHeadingComponent,
  BATDefaultHeadingComponent,
  BATWebappNavigationElementComponent,
  BATDefaultElementComponent,
  BATWebappNavigationFooterComponent,
  BATCloseComponent,
  BATHeaderGeneratorDirective,
  BATNavElementGeneratorDirective
];

const WEBAPP_NAVIGATION_EXPORTS = [
  BATWebappNavigationComponent,
  BATWebappNavigationHeadingComponent,
  BATWebappNavigationElementComponent,
  BATWebappNavigationFooterComponent
];

@NgModule({
 imports: [
   BATCommonModule,
   BATCoreModule,
   FlexLayoutModule,
   CommonModule,
   FormsModule,
   MatIconModule
 ],
 exports: [
   ...WEBAPP_NAVIGATION_EXPORTS
 ],
 declarations: [
   ...WEBAPP_NAVIGATION_IMPORTS
 ],
  entryComponents: [
    BATDefaultHeadingComponent,
    BATDefaultElementComponent
  ],
 providers: [],
})
export class BATLayoutModule { }
