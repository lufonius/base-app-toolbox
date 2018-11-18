import { NgModule } from '@angular/core';

import {
  BATWebappNavigationComponent,
  BATDefaultElementComponent,
  BATDefaultHeadingComponent,
  BATElementComponent,
  BATFooterComponent,
  BATHeadingComponent
} from './components/webapp-navigation';


const WEBAPP_NAVIGATION_IMPORTS = [
  BATWebappNavigationComponent,
  BATHeadingComponent,
  BATDefaultHeadingComponent,
  BATElementComponent,
  BATDefaultElementComponent,
  BATFooterComponent
];

@NgModule({
 imports: [],
 exports: [ BATWebappNavigationComponent ],
 declarations: [
   ...WEBAPP_NAVIGATION_IMPORTS
 ],
 providers: [],
})
export class BATLayoutModule { }
