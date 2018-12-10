import { BATNavItem } from "./base-nav-item.model";

export class BATNavItemDenormalized extends BATNavItem {

  constructor(navItem?: BATNavItem) {
    super();

    if(!!navItem) {
      this.id = navItem.id;
      this.childrenIds = navItem.childrenIds;
      this.parentId = navItem.parentId;
      this.route = navItem.route;
    }
  }

  children?: BATNavItemDenormalized[] = [];
}

