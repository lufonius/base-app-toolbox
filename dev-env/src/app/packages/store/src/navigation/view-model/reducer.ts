import {
  BATViewModelLogic,
  BATDefaultNavigationViewModelLogic,
  BATDefaultNavigationViewModel
} from '@base-app-toolbox/core';

import {
  BATGoToNextLevelAction,
  BATGoToPreviousLevelAction,
  BATInitAction,
  BATViewModelActionUnion,
  BATWebappNavigationActionTypes
} from "./actions";

export interface State {
  viewModel: BATDefaultNavigationViewModel,
  currentLevel: number
}

export const initialState: State = {
  viewModel: {},
  currentLevel: 1
};

const viewModelLogic: BATViewModelLogic = new BATDefaultNavigationViewModelLogic();

export function reducer(state = initialState, action: BATViewModelActionUnion): State {
  switch (action.type) {

    case BATWebappNavigationActionTypes.init: {
      const payload = (<BATInitAction>action).payload;
      const navItems = payload.navItems;

      const initial = viewModelLogic.init(navItems);

      return {
        ...state,
        viewModel: {
          ...initial.viewModel
        },
        currentLevel: initial.level
      };
    }

    case BATWebappNavigationActionTypes.goToNextLevel: {
      const payload = (<BATGoToNextLevelAction>action).payload;
      const navItems = payload.navItems;
      const navItem = payload.navItem;
      const level = payload.level;

      const nextLevel = viewModelLogic.goToNextLevel(state.viewModel, navItems, navItem, level);

      return {
        ...state,
        viewModel: {
          ...nextLevel.viewModel
        },
        currentLevel: nextLevel.level
      };
    }

    case BATWebappNavigationActionTypes.goToPreviousLevel: {
      const payload = (<BATGoToPreviousLevelAction>action).payload;
      const level = payload.level;

      const previousLevel = viewModelLogic.goToPreviousLevel(state.viewModel, level);

      return {
        ...state,
        viewModel: {
          ...previousLevel.viewModel
        },
        currentLevel: previousLevel.level
      };
    }

    default:
      return state;
  }
}

