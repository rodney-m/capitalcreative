import { PERMISSIONS } from '../data/permissions.data';

export interface MenuItem {
  name: string;
  keywords?: string;
  icon?: string;
  routerLink?: string;
  subMenuItems?: MenuItem[];
  permissions?: PERMISSIONS[];
  isOpen?: boolean;
}
