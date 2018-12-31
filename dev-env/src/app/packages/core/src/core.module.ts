import { NgModule } from '@angular/core';
import { BATDefaultMediaQueryService } from "./default-media-query.service";
import { BATMediaQueryService } from "./media-query";

@NgModule({
 imports: [],
 exports: [],
 declarations: [],
 providers: [
   {
     provide: BATMediaQueryService,
     useClass: BATDefaultMediaQueryService
   }

 ],
})
export class BATCoreModule { }
