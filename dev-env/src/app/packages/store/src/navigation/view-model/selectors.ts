import { BATViewModelState } from "./reducer";

export const batViewModelSelectViewModel = (state: BATViewModelState) => state.viewModel;
export const batViewModelSelectCurrentLevel = (state: BATViewModelState) => state.currentLevel;
