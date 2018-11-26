export interface BaseNavItem {
  id: string;

  route: string;
  level: number;

  parentId: string;
  childrenIds: string[];

  children: BaseNavItem[];
  parent: BaseNavItem;
}

