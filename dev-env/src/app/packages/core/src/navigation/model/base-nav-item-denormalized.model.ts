import { BATNavItem } from "./base-nav-item.model";
import * as _ from 'lodash';

export class BATNavItemDenormalized extends BATNavItem {

  constructor(navItem?: BATNavItem) {
    super();

    if(!!navItem) {
      //copy all of the properties (custom ones too, which are not relevant for the logic)
      Object.keys(navItem).forEach((key: string) => {
        this[key] = _.cloneDeep(navItem[key]);
      });
    }

  }

  children?: BATNavItemDenormalized[] = [];
}

