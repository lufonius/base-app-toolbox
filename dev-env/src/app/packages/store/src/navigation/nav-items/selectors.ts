import { batNavItemsAdapter } from './reducer';

const selectors = batNavItemsAdapter.getSelectors();

export const batSelectNavItemsIds = selectors.selectIds;
export const batSelectNavItemsEntities = selectors.selectEntities;
export const batSelectNavItemsAll = selectors.selectAll;
export const batSelectNavItemsTotal = selectors.selectTotal;
