import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";
import { batNavItemsReducer, batViewModelReducer } from "@base-app-toolbox/store";

@NgModule({
 imports: [
   StoreModule.forFeature('navigation', {
     navItems: batNavItemsReducer,
     viewModel: batViewModelReducer
   })
 ],
 exports: [],
 declarations: [],
 providers: [],
})
export class NavigationModule { }
