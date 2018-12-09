import {
  createEntityAdapter,
  EntityState
} from "@ngrx/entity";
import { BATNavItem } from "@base-app-toolbox/core";
import {
  BATNavItemActionsUnion,
  BATNavItemActionTypes
} from "./actions";

export const batNavItemsAdapter = createEntityAdapter<BATNavItem>();

export interface BATNavItemsState extends EntityState<BATNavItem>{}

const initialState: BATNavItemsState = batNavItemsAdapter.getInitialState();

export function batNavItemsReducer(state = initialState, action: BATNavItemActionsUnion): BATNavItemsState {
  switch (action.type) {

    case BATNavItemActionTypes.ADD_NAV_ITEM: {
      return batNavItemsAdapter.addOne(action.payload.navItem, state);
    }

    case BATNavItemActionTypes.UPSERT_NAV_ITEM: {
      return batNavItemsAdapter.upsertOne(action.payload.navItem, state);
    }

    case BATNavItemActionTypes.ADD_NAV_ITEMS: {
      return batNavItemsAdapter.addMany(action.payload.navItems, state);
    }

    case BATNavItemActionTypes.UPSERT_NAV_ITEMS: {
      return batNavItemsAdapter.upsertMany(action.payload.navItems, state);
    }

    case BATNavItemActionTypes.UPDATE_NAV_ITEM: {
      return batNavItemsAdapter.updateOne(action.payload.navItem, state);
    }

    case BATNavItemActionTypes.UPDATE_NAV_ITEMS: {
      return batNavItemsAdapter.updateMany(action.payload.navItems, state);
    }

    case BATNavItemActionTypes.DELETE_NAV_ITEM: {
      return batNavItemsAdapter.removeOne(action.payload.id, state);
    }

    case BATNavItemActionTypes.DELETE_NAV_ITEMS: {
      return batNavItemsAdapter.removeMany(action.payload.ids, state);
    }

    case BATNavItemActionTypes.LOAD_NAV_ITEMS: {
      return batNavItemsAdapter.addAll(action.payload.navItems, state);
    }

    case BATNavItemActionTypes.CLEAR_NAV_ITEMS: {
      return batNavItemsAdapter.removeAll({ ...state });
    }

    default:
      return state;
  }
}
