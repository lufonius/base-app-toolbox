import { BATNavItemDenormalized } from "./base-nav-item-denormalized.model";

export type BATDefaultNavigationViewModel = {
  [level: string]: { navItems: BATNavItemDenormalized[], parentNavItem: BATNavItemDenormalized }
};
