import {
  createEntityAdapter,
  EntityState
} from "@ngrx/entity";
import { BATNavItem } from "@base-app-toolbox/core";
import {
  BATNavItemActionsUnion,
  BATNavItemActionTypes
} from "./actions";

export const adapter = createEntityAdapter<BATNavItem>();

export interface State extends EntityState<BATNavItem>{}

export const initialState: State = adapter.getInitialState();


export function reducer(state = initialState, action: BATNavItemActionsUnion): State {
  switch (action.type) {

    case BATNavItemActionTypes.ADD_NAV_ITEM: {
      return adapter.addOne(action.payload.navItem, state);
    }

    case BATNavItemActionTypes.UPSERT_NAV_ITEM: {
      return adapter.upsertOne(action.payload.navItem, state);
    }

    case BATNavItemActionTypes.ADD_NAV_ITEMS: {
      return adapter.addMany(action.payload.navItems, state);
    }

    case BATNavItemActionTypes.UPSERT_NAV_ITEMS: {
      return adapter.upsertMany(action.payload.navItems, state);
    }

    case BATNavItemActionTypes.UPDATE_NAV_ITEM: {
      return adapter.updateOne(action.payload.navItem, state);
    }

    case BATNavItemActionTypes.UPDATE_NAV_ITEMS: {
      return adapter.updateMany(action.payload.navItems, state);
    }

    case BATNavItemActionTypes.DELETE_NAV_ITEM: {
      return adapter.removeOne(action.payload.id, state);
    }

    case BATNavItemActionTypes.DELETE_NAV_ITEMS: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case BATNavItemActionTypes.LOAD_NAV_ITEMS: {
      return adapter.addAll(action.payload.navItems, state);
    }

    case BATNavItemActionTypes.CLEAR_NAV_ITEMS: {
      return adapter.removeAll({ ...state });
    }

    default:
      return state;
  }
}

