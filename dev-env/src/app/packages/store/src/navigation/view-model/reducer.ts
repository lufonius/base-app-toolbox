import {
  BATViewModelLogic,
  BATDefaultNavigationViewModelLogic,
  BATDefaultNavigationViewModel
} from '@base-app-toolbox/core';

import {
  BATGoToNextLevelAction,
  BATGoToPreviousLevelAction,
  BATViewModelInitAction,
  BATViewModelActionUnion,
  BATWebappNavigationActionTypes
} from "./actions";

export interface BATViewModelState {
  viewModel: BATDefaultNavigationViewModel,
  currentLevel: number
}

const initialState: BATViewModelState = {
  viewModel: {},
  currentLevel: 1
};

const viewModelLogic: BATViewModelLogic = new BATDefaultNavigationViewModelLogic();

export function batViewModelReducer(state = initialState, action: BATViewModelActionUnion): BATViewModelState {
  switch (action.type) {

    case BATWebappNavigationActionTypes.viewModelInit: {
      const payload = (<BATViewModelInitAction>action).payload;
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

