import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import { State } from '../store';
import { Observable } from "rxjs/index";
import { BATNavItem, BATDefaultNavigationViewModel, BATDefaultNavItem } from "@base-app-toolbox/core";
import {getCurrentLevel, getNavItemsEntites, getViewModel} from "../store/navigation";
import {
  BATGoToNextLevelAction,
  BATGoToPreviousLevelAction,
  BATViewModelInitAction,
  BATAddNavItems
} from "@base-app-toolbox/store";

@Component({
  selector: 'webapp-navigation',
  templateUrl: './webapp-navigation.component.html',
  styleUrls: ['./webapp-navigation.component.scss']
})
export class WebappNavigationComponent implements OnInit {

  public navItems$: Observable<{ [id: string]: BATNavItem }>;
  public viewModel$: Observable<BATDefaultNavigationViewModel>;
  public currentLevel$: Observable<number>;

  public navItems: BATDefaultNavItem[] = [
    {
      id: "1",
      route: "",
      title: "first",
      subtitle: "firstsubtitle",
      parentId: null,
      childrenIds: [ "3", "5" ]
    },
    {
      id: "2",
      route: "",
      title: "second",
      subtitle: "secondsubtitle",
      parentId: null,
      childrenIds: [ "6" ]
    },
    {
      id: "3",
      route: "",
      title: "third",
      subtitle: "thirdsubtitle",
      parentId: "1",
      childrenIds: [ "4" ]
    },
    {
      id: "4",
      route: "",
      title: "fourth",
      subtitle: "fourthsubtitle",
      parentId: "3",
      childrenIds: []
    },
    {
      id: "5",
      route: "",
      title: "fifth",
      subtitle: "fifthsubtitle",
      parentId: "1",
      childrenIds: []
    },
    {
      id: "6",
      route: "",
      title: "sixth",
      subtitle: "sixthsubtitle",
      parentId: "2",
      childrenIds: []
    }
  ];
  public navItemEntites: {[id: string]: BATDefaultNavItem} = {};

  constructor(public store: Store<State>) { }

  ngOnInit() {
    this.navItems$ = this.store.pipe(select(getNavItemsEntites));
    this.viewModel$ = this.store.pipe(select(getViewModel));
    this.currentLevel$ = this.store.pipe(select(getCurrentLevel));

    this.navItems$.subscribe((navItems: {[id: string]: BATDefaultNavItem}) => {
      this.navItemEntites = navItems;
      this.store.dispatch(new BATViewModelInitAction({ navItems }));
    });

    this.store.dispatch(new BATAddNavItems({ navItems: this.navItems }));
  }

  goToPreviousLevel(level) {
    this.store.dispatch(new BATGoToPreviousLevelAction({ level }));
  }

  goToNextLevel(navItem, level) {
    this.store.dispatch(new BATGoToNextLevelAction({ navItems: this.navItemEntites, navItem, level }));
  }
}
