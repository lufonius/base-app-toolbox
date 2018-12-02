import { BATNavItemDenormalized } from "../model/base-nav-item-denormalized.model";
import { BATDefaultNavigationViewModel } from "../model/view-model.model";
import {BATNavItem} from "../model/base-nav-item.model";

export type BATViewModelLogicType = {
  viewModel: BATDefaultNavigationViewModel;
  level: number;
}

export interface BATViewModelLogic {

  init(navItems: { [id: string]: BATNavItem }): BATViewModelLogicType;

  goToNextLevel(
    viewModel: BATDefaultNavigationViewModel,
    navItems: { [id: string]: BATNavItem },
    navItem: BATNavItem,
    level: number
  ): BATViewModelLogicType;

  goToPreviousLevel(
    viewModel: BATDefaultNavigationViewModel,
    level: number
  ): BATViewModelLogicType;

}
