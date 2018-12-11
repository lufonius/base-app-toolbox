import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ViewEncapsulation } from "@angular/core";
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
  @Output() goingToNextLevel = new EventEmitter<{navItem: BATNavItemDenormalized, level: number}>();
  @Output() goingToPreviousLevel = new EventEmitter<{level: number}>();

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

  showDefaultDivider(
    mediaQuery: 'mobile' | 'desktop',
    hasMobileElementTemplate: boolean,
    hasDesktopElementTemplate: boolean
  ) {
    if(mediaQuery === 'mobile' && hasMobileElementTemplate) return false;
    if(mediaQuery === 'desktop' && hasDesktopElementTemplate) return false;

    return true;
  }

  goToNextLevel(navItem: BATNavItemDenormalized, level: number) {
    this.goingToNextLevel.emit({ navItem, level });
  }

  goToPreviousLevel(level: number) {
    this.goingToPreviousLevel.emit({ level });
  }
}


