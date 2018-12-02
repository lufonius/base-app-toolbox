import {Action} from "@ngrx/store";
import { Update } from "@ngrx/entity";

import { BATNavItem } from "@base-app-toolbox/core";

export enum BATNavItemActionTypes {
  LOAD_NAV_ITEMS = '[BATNavItem] Load NavItems',
  ADD_NAV_ITEM = '[BATNavItem] Add NavItem',
  UPSERT_NAV_ITEM = '[BATNavItem] Upsert NavItem',
  ADD_NAV_ITEMS = '[BATNavItem] Add NavItems',
  UPSERT_NAV_ITEMS = '[BATNavItem] Upsert NavItems',
  UPDATE_NAV_ITEM = '[BATNavItem] Update NavItem',
  UPDATE_NAV_ITEMS = '[BATNavItem] Update NavItems',
  DELETE_NAV_ITEM = '[BATNavItem] Delete NavItem',
  DELETE_NAV_ITEMS = '[BATNavItem] Delete NavItems',
  CLEAR_NAV_ITEMS = '[BATNavItem] Clear NavItems',
}

export class LoadBATNavItems implements Action {
  readonly type = BATNavItemActionTypes.LOAD_NAV_ITEMS;

  constructor(public payload: { navItems: BATNavItem[] }) {}
}

export class AddBATNavItem implements Action {
  readonly type = BATNavItemActionTypes.ADD_NAV_ITEM;

  constructor(public payload: { navItem: BATNavItem }) {}
}

export class UpsertBATNavItem implements Action {
  readonly type = BATNavItemActionTypes.UPSERT_NAV_ITEM;

  constructor(public payload: { navItem: BATNavItem }) {}
}

export class AddBATNavItems implements Action {
  readonly type = BATNavItemActionTypes.ADD_NAV_ITEMS;

  constructor(public payload: { navItems: BATNavItem[] }) {}
}

export class UpsertBATNavItems implements Action {
  readonly type = BATNavItemActionTypes.UPSERT_NAV_ITEMS;

  constructor(public payload: { navItems: BATNavItem[] }) {}
}

export class UpdateBATNavItem implements Action {
  readonly type = BATNavItemActionTypes.UPDATE_NAV_ITEM;

  constructor(public payload: { navItem: Update<BATNavItem> }) {}
}

export class UpdateBATNavItems implements Action {
  readonly type = BATNavItemActionTypes.UPDATE_NAV_ITEMS;

  constructor(public payload: { navItems: Update<BATNavItem>[] }) {}
}

export class DeleteBATNavItem implements Action {
  readonly type = BATNavItemActionTypes.DELETE_NAV_ITEM;

  constructor(public payload: { id: string }) {}
}

export class DeleteBATNavItems implements Action {
  readonly type = BATNavItemActionTypes.DELETE_NAV_ITEMS;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearBATNavItems implements Action {
  readonly type = BATNavItemActionTypes.CLEAR_NAV_ITEMS;
}

export type BATNavItemActionsUnion =
  | LoadBATNavItems
  | AddBATNavItem
  | UpsertBATNavItem
  | AddBATNavItems
  | UpsertBATNavItems
  | UpdateBATNavItem
  | UpdateBATNavItems
  | DeleteBATNavItem
  | DeleteBATNavItems
  | ClearBATNavItems;
