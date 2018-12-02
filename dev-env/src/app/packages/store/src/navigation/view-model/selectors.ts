import { State } from "./reducer";

export const getViewModelState = (state: State) => state.viewModel;
export const getCurrentLevel = (state: State) => state.currentLevel;
