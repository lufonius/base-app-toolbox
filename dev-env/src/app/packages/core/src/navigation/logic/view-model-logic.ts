import { BATNavItemDenormalized } from "../model/base-nav-item-denormalized.model";
import { BATDefaultNavigationViewModel } from "../model/view-model.model";
import * as _ from 'lodash';
import { BATViewModelLogic } from "./view-model-logic.interface";
import {BATNavItem} from "../model/base-nav-item.model";
import {current} from "codelyzer/util/syntaxKind";

//this class is tested in the store package ...
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


  //builds the viewmodel for the corresponding level and parent navitem
  //when a user clicks a navitem, this navitem becomes the parent navitem for the next level
  //the new current level is increased by one
  public goToNextLevel(
    viewModel: BATDefaultNavigationViewModel,
    navItems: { [id: string]: BATNavItem },
    parentNavItem: BATNavItem,
    currentLevel: number
  ) {
    if(typeof currentLevel === "string") {
      currentLevel = parseInt(currentLevel);
    }

    let resetedViewModel = null;

    let nextLevel = currentLevel;
    let nextLevelNavItems = this.getNavItemsById(navItems, parentNavItem.childrenIds);

    //if the parent has no children, it's not possible to jump to the next level
    if(parentNavItem.childrenIds.length > 0) {
      //since we step into the hirarchy by showing the next level when a navitem is clicked,
      //the level has to be increased by one
      nextLevel = currentLevel + 1;
      resetedViewModel = this.resetViewModel(viewModel, nextLevel);
      resetedViewModel[`${nextLevel}`] = { navItems: nextLevelNavItems, parentNavItem: parentNavItem };
    } else {
      resetedViewModel = this.resetViewModel(viewModel, (currentLevel + 1));
    }

    return {
      viewModel: resetedViewModel,
      level: nextLevel
    };
  }

  //** @internal */
  private resetViewModel(viewModel, level: number): BATDefaultNavigationViewModel {
    //make it immutable ... parameters shouldn't be changed by reference
    let newViewModel = _.cloneDeep(viewModel);
    //first of all, delete every level which is equal or smaller to the given next level, which
    //is to generate. Otherwise it a wring viewmodel is generated. That has to be done, because
    //it is possible on the desktop mode to jump around the whole navigation.
    //ex: from 4th level to the second.
    Object.keys(newViewModel).forEach((key: string) => {
      let viewModelLevel = parseInt(key);

      if (viewModelLevel >= level) {
        delete newViewModel[key];
      }
    });

    return newViewModel;
  }

  public goToPreviousLevel(
    viewModel: BATDefaultNavigationViewModel,
    currentLevel: number
  ) {
    if(typeof currentLevel === "string") {
      currentLevel = parseInt(currentLevel);
    }

    let newViewModel = _.cloneDeep(viewModel);

    let previousLevel = currentLevel - 1;
    delete newViewModel[currentLevel];
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
    let matchingNavItems = ids
      .filter((id: string) => !!navItems[id])
      .map((id: string) => new BATNavItemDenormalized(navItems[id]));

    return _.cloneDeep(matchingNavItems);
  }

  public getNavItemsByParentIdNull(navItems: {[id: string]: BATNavItem}): BATNavItemDenormalized[] {
    return Object.keys(navItems)
      .filter(key => navItems[key].parentId === null)
      .map(key => new BATNavItemDenormalized(navItems[key]));
  }
}
