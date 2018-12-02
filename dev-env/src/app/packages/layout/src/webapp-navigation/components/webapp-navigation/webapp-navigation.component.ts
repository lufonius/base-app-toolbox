import {
  Component,
  ContentChild, EventEmitter, Input, Output,
} from '@angular/core';
import { ViewEncapsulation } from "@angular/core";
import { BATNavItemDenormalized } from "../../../../../core/src/navigation/model/base-nav-item-denormalized.model";
import { animations } from './webapp-navigation-animations';
import { BATWebappNavigationHeadingComponent } from "./heading/heading.component";
import {BATWebappNavigationElementComponent} from "./element/element.component";
import {BATMediaQueryService} from "@base-app-toolbox/core";
import {Observable} from "rxjs/index";
import {map} from "rxjs/operators";
import {BATDefaultNavigationViewModel} from "../../../../../core/src/navigation/model/view-model.model";

class basetemp {


  public navItems = [
    {
      id: "1",
      route: "",
      level: 1,
      title: "first",
      subtitle: "firstsubtitle",
      parentId: null,
      childrenIds: [ "3", "5" ],
      children: [
        {
          id: "3",
          route: "",
          level: 2,
          title: "third",
          subtitle: "thirdsubtitle",
          parentId: "1",
          childrenIds: [ "4" ],
          children: [
            {
              id: "4",
              route: "",
              level: 3,
              title: "fourth",
              subtitle: "fourthsubtitle",
              parentId: "3",
              childrenIds: [],
              children: [],
              parent: {
                id: "3",
                route: "",
                level: 2,
                title: "third",
                subtitle: "thirdsubtitle",
                parentId: "1",
                childrenIds: [ "4" ],
                parent: null,
                children: null
              }
            }
          ],
          parent: {
            id: "1",
            route: "",
            level: 1,
            title: "first",
            subtitle: "firstsubtitle",
            parentId: null,
            childrenIds: [ "3", "5" ],
            parent: null,
            children: null
          }
        },
        {
          id: "5",
          route: "",
          level: 2,
          title: "fifth",
          subtitle: "fifthsubtitle",
          parentId: "1",
          childrenIds: [],
          children: [],
          parent: {
            id: "1",
            route: "",
            level: 1,
            title: "first",
            subtitle: "firstsubtitle",
            parentId: null,
            childrenIds: [ "3", "5" ],
            parent: null,
            children: null
          }
        }
      ]
    },
    {
      id: "2",
      route: "",
      level: 1,
      title: "second",
      subtitle: "secondsubtitle",
      parentId: null,
      childrenIds: [ "6" ],
      children: [
        {
          id: "6",
          route: "",
          level: 2,
          title: "sixth",
          subtitle: "sixthsubtitle",
          parentId: "2",
          childrenIds: [],
          parent: {
            id: "2",
            route: "",
            level: 1,
            title: "second",
            subtitle: "secondsubtitle",
            parentId: null
          }
        }
      ]
    }
  ];
}

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


