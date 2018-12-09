import {
  BATNavItemsState,
  BATViewModelState,
  batSelectNavItemsEntities,
  batViewModelSelectViewModel,
  batViewModelSelectCurrentLevel
} from "@base-app-toolbox/store";
import {
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

export interface State {
  navItems: BATNavItemsState,
  viewModel: BATViewModelState
}

export const getNavigationState = createFeatureSelector<State>('navigation');

export const getNavItemsState = createSelector(
  getNavigationState,
  (state: State) => state.navItems
);

export const getNavItemsEntites = createSelector(
  getNavItemsState,
  batSelectNavItemsEntities
);

export const getViewModelState = createSelector(
  getNavigationState,
  (state: State) => state.viewModel
);

export const getViewModel = createSelector(
  getViewModelState,
  batViewModelSelectViewModel
);

export const getCurrentLevel = createSelector(
  getViewModelState,
  batViewModelSelectCurrentLevel
);
