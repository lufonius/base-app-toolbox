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

export class BATLoadNavItems implements Action {
  readonly type = BATNavItemActionTypes.LOAD_NAV_ITEMS;

  constructor(public payload: { navItems: BATNavItem[] }) {}
}

export class BATAddNavItem implements Action {
  readonly type = BATNavItemActionTypes.ADD_NAV_ITEM;

  constructor(public payload: { navItem: BATNavItem }) {}
}

export class BATUpsertNavItem implements Action {
  readonly type = BATNavItemActionTypes.UPSERT_NAV_ITEM;

  constructor(public payload: { navItem: BATNavItem }) {}
}

export class BATAddNavItems implements Action {
  readonly type = BATNavItemActionTypes.ADD_NAV_ITEMS;

  constructor(public payload: { navItems: BATNavItem[] }) {}
}

export class BATUpsertNavItems implements Action {
  readonly type = BATNavItemActionTypes.UPSERT_NAV_ITEMS;

  constructor(public payload: { navItems: BATNavItem[] }) {}
}

export class BATUpdateNavItem implements Action {
  readonly type = BATNavItemActionTypes.UPDATE_NAV_ITEM;

  constructor(public payload: { navItem: Update<BATNavItem> }) {}
}

export class BATUpdateNavItems implements Action {
  readonly type = BATNavItemActionTypes.UPDATE_NAV_ITEMS;

  constructor(public payload: { navItems: Update<BATNavItem>[] }) {}
}

export class BATDeleteNavItem implements Action {
  readonly type = BATNavItemActionTypes.DELETE_NAV_ITEM;

  constructor(public payload: { id: string }) {}
}

export class BATDeleteNavItems implements Action {
  readonly type = BATNavItemActionTypes.DELETE_NAV_ITEMS;

  constructor(public payload: { ids: string[] }) {}
}

export class BATClearNavItems implements Action {
  readonly type = BATNavItemActionTypes.CLEAR_NAV_ITEMS;
}

export type BATNavItemActionsUnion =
  | BATLoadNavItems
  | BATAddNavItem
  | BATUpsertNavItem
  | BATAddNavItems
  | BATUpsertNavItems
  | BATUpdateNavItem
  | BATUpdateNavItems
  | BATDeleteNavItem
  | BATDeleteNavItems
  | BATClearNavItems;
