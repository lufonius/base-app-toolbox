export interface BaseNavItem {
  id: string;

  route: string;
  level: number;
  hidden: boolean;

  parentId: string;
  childrenIds: string[];
}

