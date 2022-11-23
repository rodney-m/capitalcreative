import { MenuItem } from './menu-item';
import { InjectionToken } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { NavItem } from '../../../../layouts/src/lib/models/nav-item';

export const INJECTIONVARIABLE = new InjectionToken<InjectionVariable>('INJECTIONVARIABLE');

export interface InjectionVariable{
    sideMenuItems: NavItem[];
    topMenuItems: NavItem[];
    environment: any;
}