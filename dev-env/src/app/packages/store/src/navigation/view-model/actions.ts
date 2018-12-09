import { Action } from "@ngrx/store";
import { BATNavItem } from "@base-app-toolbox/core";

export enum BATWebappNavigationActionTypes {
  viewModelInit = '[BATWebappNavigation] viewModelInit',
  goToNextLevel = '[BATWebappNavigation] goToNextLevel',
  goToPreviousLevel = '[BATWebappNavigation] goToPreviousLevel'
}

export class BATViewModelInitAction implements Action {
  public readonly type = BATWebappNavigationActionTypes.viewModelInit;

  constructor(public payload: { navItems: { [id: string]: BATNavItem } }) {}
}

export class BATGoToNextLevelAction implements Action {
  public readonly type = BATWebappNavigationActionTypes.goToNextLevel;

  constructor(public payload: { navItems: { [id: string]: BATNavItem }, navItem: BATNavItem, level: number }) {}
}

export class BATGoToPreviousLevelAction implements Action {
  public readonly type = BATWebappNavigationActionTypes.goToPreviousLevel;

  constructor(public payload: { level: number }) {}
}

export type BATViewModelActionUnion =
  BATViewModelInitAction
| BATGoToNextLevelAction
| BATGoToPreviousLevelAction;

