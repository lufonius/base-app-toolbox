import { BATNavItemDenormalized } from "../model/base-nav-item-denormalized.model";
import { BATDefaultNavigationViewModel } from "../model/view-model.model";
import * as _ from 'lodash';
import { BATViewModelLogic } from "./view-model-logic.interface";
import {BATNavItem} from "../model/base-nav-item.model";

export class BATDefaultNavigationViewModelLogic implements BATViewModelLogic {

  public init(
    navItems: { [id: string]: BATNavItem }
  ) {
    let viewModel = {};
    //the fromNavItems with no parentId are the highest in the hierarchy
    let firstLevelNavItems = this.getNavItemsByParentIdNull(navItems);
    viewModel['1'] = { navItems: _.cloneDeep(firstLevelNavItems), parentNavItem: null };

    return {
      viewModel: viewModel,
      level: 1
    }
  }


  public goToNextLevel(
    viewModel: BATDefaultNavigationViewModel,
    navItems: { [id: string]: BATNavItem },
    navItem: BATNavItem,
    level: number
  ) {
    let newViewModel = _.cloneDeep(viewModel);
    let nextLevel = level;
    let nextLevelNavItems = this.getNavItemsById(navItems, navItem.childrenIds);

    if(navItem.childrenIds.length > 0) {
      let nextLevel = level + 1;
      newViewModel[`${nextLevel}`] = { navItems: nextLevelNavItems, parentNavItem: navItem };
    }

    return {
      viewModel: newViewModel,
      level: nextLevel
    };
  }

  public goToPreviousLevel(
    viewModel: BATDefaultNavigationViewModel,
    level: number
  ) {
    let newViewModel = _.cloneDeep(viewModel);

    let previousLevel = level - 1;
    delete newViewModel[level];
    //making inmutable from the outside
    return {
      viewModel: newViewModel,
      level: previousLevel
    };
  }

  public getNavItemsById (
    navItems: {[id: string]: BATNavItem},
    ids: string[]
  ): BATNavItemDenormalized[] {
    let matchingNavItems = ids.map((id: string) => new BATNavItemDenormalized(navItems[id]));
    return _.cloneDeep(matchingNavItems);
  }

  public getNavItemsByParentIdNull(navItems: {[id: string]: BATNavItem}): BATNavItemDenormalized[] {
    return Object.keys(navItems)
      .filter(key => navItems[key].parentId === null)
      .map(key => new BATNavItemDenormalized(navItems[key]));
  }
}
