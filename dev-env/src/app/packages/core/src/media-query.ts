import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs/index";
import {MediaChange, ObservableMedia} from "@angular/flex-layout";

export abstract class BATMediaQueryService {

  public isMobileMediaQuery$: Subject<boolean>;
  public isDesktopMediaQuery$: Subject<boolean>;
  public mediaQuery$: Subject<'mobile' | 'desktop'>;
}
