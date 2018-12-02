import { NgModule } from '@angular/core';

import {
  BATWebappNavigationComponent,
  BATWebappNavigationDefaultElementComponent,
  BATWebappNavigationDefaultHeadingComponent,
  BATWebappNavigationElementComponent,
  BATWebappNavigationHeadingComponent,
  BATWebappNavigationCloseComponent
} from './webapp-navigation/components';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';
import { BATWebappNavigationFooterComponent } from './webapp-navigation/components/footer/footer.component';
import { BATWebappNavigationHeaderGeneratorDirective } from './webapp-navigation/components/header-generator.directive';
import { BATWebappNavigationNavElementGeneratorDirective } from './webapp-navigation/components/nav-element-generator.directive';
import { BATCoreModule } from "@base-app-toolbox/core";


const WEBAPP_NAVIGATION_IMPORTS = [
  BATWebappNavigationComponent,
  BATWebappNavigationHeadingComponent,
  BATWebappNavigationDefaultHeadingComponent,
  BATWebappNavigationElementComponent,
  BATWebappNavigationDefaultElementComponent,
  BATWebappNavigationFooterComponent,
  BATWebappNavigationCloseComponent,
  BATWebappNavigationHeaderGeneratorDirective,
  BATWebappNavigationNavElementGeneratorDirective
];

const WEBAPP_NAVIGATION_EXPORTS = [
  BATWebappNavigationComponent,
  BATWebappNavigationHeadingComponent,
  BATWebappNavigationElementComponent,
  BATWebappNavigationFooterComponent
];

const ENTRY_COMPONENTS = [
  BATWebappNavigationDefaultHeadingComponent,
  BATWebappNavigationDefaultElementComponent
];

@NgModule({
 imports: [
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
    ...ENTRY_COMPONENTS
  ],
 providers: [],
})
export class BATLayoutModule { }
