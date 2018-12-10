import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ViewEncapsulation } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
  BATDefaultNavigationViewModel,
  BATNavItemDenormalized,
  BATMediaQueryService
} from "@base-app-toolbox/core";
import { animations } from './webapp-navigation-animations';
import { BATWebappNavigationHeadingComponent } from "./heading/heading.component";
import { BATWebappNavigationElementComponent } from "./element/element.component";

@Component({
  selector: 'bat-webapp-nav',
  templateUrl: './webapp-navigation.component.html',
  styleUrls: ['./webapp-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: animations
})
export class BATWebappNavigationComponent {

  @ContentChild(BATWebappNavigationHeadingComponent) headingComponent: BATWebappNavigationHeadingComponent;
  @ContentChild(BATWebappNavigationElementComponent) elementComponent: BATWebappNavigationElementComponent;

  @Input() viewModel: BATDefaultNavigationViewModel = {};
  @Input() currentLevel: number = 1;
  @Output() goingToNextLevel = new EventEmitter<{currentNavItem: BATNavItemDenormalized, currentLevel: number}>();
  @Output() goingToPreviousLevel = new EventEmitter<{currentLevel: number}>();

  public objectKeys = Object.keys;

  public visibilityState: 'visible' | 'invisible' = 'invisible';
  public isVisible: boolean = false;

  @Input() set visible(isVisible: boolean) {
    if(isVisible === true) {
      this.visibilityState = 'visible';
    } else if(isVisible === false) {
      this.visibilityState = 'invisible';
    }

    this.isVisible = isVisible;
  }

  get visible(): boolean {
    return this.isVisible;
  }

  constructor(public mediaQueryService: BATMediaQueryService) {
    this.visible = false;
  }

  wrap(fn, ...params) {
    //apply is needed since this would point to the anonymous function
    return () => fn.apply(this, params);
  }

  getMediaQuery(): Observable<'mobile' | 'desktop'> {
    return this.mediaQueryService.isMobileMediaQuery$.pipe(
      map((isMobileMediaQuery: boolean) => (isMobileMediaQuery) ? 'mobile' : 'desktop')
    )
  }

  goToNextLevel(currentNavItem: BATNavItemDenormalized, currentLevel: number) {
    this.goingToNextLevel.emit({ currentNavItem, currentLevel });
  }

  goToPreviousLevel(currentLevel: number) {
    this.goingToPreviousLevel.emit({ currentLevel });
  }
}

