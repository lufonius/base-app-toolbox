import { Action } from '@ngrx/store';
import { EntityState } from "@ngrx/entity";
import { BaseNavItem } from "../model/base-nav-item.model";

export interface State {
  navItems: EntityState<BaseNavItem>;
  currentLevel: number;
  currentParentId: number;
}


export const initialState: State = {
  navItems: { ids: [], entities: {} },
  currentLevel: 1,
  currentParentId: null
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}

