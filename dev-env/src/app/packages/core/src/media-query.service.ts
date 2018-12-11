import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs/index";
import {MediaChange, ObservableMedia} from "@angular/flex-layout";

@Injectable()
export class BATMediaQueryService {

  public isMobileMediaQuery$: Subject<boolean> = new BehaviorSubject(null);
  public isDesktopMediaQuery$: Subject<boolean> = new BehaviorSubject(null);
  public mediaQuery$: Subject<'mobile' | 'desktop'> = new BehaviorSubject(null);

 constructor(public observableMedia$: ObservableMedia) {
   this.observableMedia$.subscribe((mediaQueryChange: MediaChange) => {
     let isMobileMediaQuery = mediaQueryChange.mqAlias === 'xs' || mediaQueryChange.mqAlias === 'sm';
     let mediaQuery: 'mobile' | 'desktop' = (isMobileMediaQuery) ? 'mobile' : 'desktop';
     this.isMobileMediaQuery$.next(isMobileMediaQuery);
     this.isDesktopMediaQuery$.next(!isMobileMediaQuery);
     this.mediaQuery$.next(mediaQuery);
   });
 }
}
