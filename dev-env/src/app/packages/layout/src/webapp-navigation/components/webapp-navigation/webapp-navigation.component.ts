import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ContentChild,
  Injector, Type,
  ViewRef
} from '@angular/core';
import { ViewEncapsulation } from "@angular/core";
import { BaseNavItem } from "../../model/base-nav-item.model";
import { animations } from './webapp-navigation-animations';
import { BATWebappNavigationHeadingComponent } from "./heading/heading.component";
import { BATDefaultHeadingComponent } from "./default-heading/default-heading.component";
import { DefaultNavItem } from "../../model/default-nav-item.model";
import {MediaChange, ObservableMedia} from "@angular/flex-layout";
import {BehaviorSubject, Observable, Subject} from "rxjs/index";
import {BATDefaultElementComponent} from "./default-element/default-element.component";
import {BATWebappNavigationElementComponent} from "./element/element.component";

export type BATWebappNavigationViewModel = {
  [level: string]: { navItems: BaseNavItem[], parentNavItem: BaseNavItem }
};

class basetemp {
  public visibilityState: 'visible' | 'invisible' = 'invisible';
  public isVisible: boolean = false;

  public currentNavigationLevel: 'first' | 'second' = 'first';

  public activeNavigationItemId: string = null;

  public navigationHeaderTitle: string = "";

  set visible(isVisible: boolean) {
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

  public currentLevel = 1;
  public viewModel = {
    "1": { navItems: this.navItems, parentNavItem: null }
  };


  objectKeys = Object.keys;

  constructor() {
    this.visible = true;
  }

  goToNextLevel(navItem: BaseNavItem, level: string) {

    if(navItem.children) {
      let nextLevel = parseInt(level) + 1;
      this.currentLevel = nextLevel;
      this.viewModel[`${nextLevel}`] = { navItems: navItem.children, parentNavItem: navItem };
      console.log(this.viewModel);
    }
  }

  goToPreviousLevel(level: string) {
    let previousLevel = parseInt(level) - 1;
    this.currentLevel = previousLevel;
    delete this.viewModel[level];
  }
}

@Component({
  selector: 'bat-webapp-nav',
  templateUrl: './webapp-navigation.component.html',
  styleUrls: ['./webapp-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: animations
})
export class BATWebappNavigationComponent extends basetemp {

  @ContentChild(BATWebappNavigationHeadingComponent) headingComponent: BATWebappNavigationHeadingComponent;
  @ContentChild(BATWebappNavigationElementComponent) elementComponent: BATWebappNavigationElementComponent;

  public isMobileMediaQuery$: Subject<boolean> = new BehaviorSubject(true);

  constructor(
    public injector: Injector,
    public componentFactoryResolver: ComponentFactoryResolver,
    public observableMedia$: ObservableMedia) {
    super();

    this.observableMedia$.subscribe((mediaQuery: MediaChange) => {
      this.isMobileMediaQuery$.next(mediaQuery.mqAlias === 'xs' || mediaQuery.mqAlias === 'sm');
    });
  }
  generateDesktopHeadingView(
    level: number,
    parentNavItem: BaseNavItem
  ): ViewRef {
    if(!this.headingComponent.desktopHeaderTemplate) {
      let componentRef = this.generateDefaultHeadingComponent(
        this.headingComponent.headerTitle,
        false,
        () => {},
        () => {}
      );

      return componentRef.hostView;
    }

    return this.headingComponent.desktopHeaderTemplate.createEmbeddedView({
      levelevel: level,
      parentNavItem: parentNavItem
    });
  }

  generateMobileHeadingView(
    level: string,
    childNavItems: BaseNavItem[],
    parentNavItem: BaseNavItem,
    viewModel: BATWebappNavigationViewModel
  ): ViewRef {

    if(!this.headingComponent.mobileHeaderTemplate) {
      let componentRef = this.generateDefaultHeadingComponent(
        this.headingComponent.headerTitle,
        false,
        () => { this.goToPreviousLevel(level); },
        () => {}
      );

      if(level !== '1') {
        componentRef.instance.headerTitle = (<DefaultNavItem>parentNavItem).title;
        componentRef.instance.isBackButtonVisible = true;
      }

      return componentRef.hostView;
    }


    return this.headingComponent.mobileHeaderTemplate.createEmbeddedView({
      level: parseInt(level),
      childNavItems: childNavItems,
      parentNavItem: parentNavItem,
      viewModel: viewModel
    });
  }

  generateDefaultHeadingComponent(
    headerTitle?: string,
    isBackButtonVisible?: boolean,
    backClickStrategy?: Function,
    closeClickStrategy?: Function): ComponentRef<BATDefaultHeadingComponent> {
    let componentRef = this.generateComponent(BATDefaultHeadingComponent);

    componentRef.instance.headerTitle = headerTitle;
    componentRef.instance.isBackButtonVisible = isBackButtonVisible;
    componentRef.instance.backClicked.subscribe(() => { backClickStrategy(); });
    componentRef.instance.closeClicked.subscribe(() => { closeClickStrategy(); });

    return componentRef;
  }

  generateNavElementView(navItem: BaseNavItem, level: string): ViewRef {
    if(!this.elementComponent.navElementTemplate) {
      return this.generateDefaultNavElementView(<DefaultNavItem>navItem, level);
    }

    return this.elementComponent.navElementTemplate.createEmbeddedView({
      navItem: navItem,
      level: parseInt(level)
    });
  }

  generateDefaultNavElementView(navItem: DefaultNavItem, level: string) {
    let componentRef = this.generateComponent(BATDefaultElementComponent);

    componentRef.instance.hasChildren = navItem.children.length > 0;
    componentRef.instance.route = navItem.route;
    componentRef.instance.title = navItem.title;
    componentRef.instance.subtitle = navItem.subtitle;
    componentRef.instance.navigationElementClicked.subscribe(() => {
      this.goToNextLevel(navItem, level);
    });

    return componentRef.hostView;
  }

  generateComponent<T>(type: Type<T>): ComponentRef<T> {
    let factory = this.componentFactoryResolver.resolveComponentFactory(type);
    let componentRef = factory.create(this.injector);

    return componentRef;
  }
}


