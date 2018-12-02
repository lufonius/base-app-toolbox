import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs/index";
import {MediaChange, ObservableMedia} from "@angular/flex-layout";

@Injectable()
export class BATMediaQueryService {

  public isMobileMediaQuery$: Subject<boolean> = new BehaviorSubject(null);

 constructor(public observableMedia$: ObservableMedia) {
   this.observableMedia$.subscribe((mediaQuery: MediaChange) => {
     this.isMobileMediaQuery$.next(mediaQuery.mqAlias === 'xs' || mediaQuery.mqAlias === 'sm');
   });
 }
}
