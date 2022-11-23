import { InjectionToken } from '@angular/core';

export const _environment = new InjectionToken<EnvironmentInterface>('environment');

export interface EnvironmentInterface {
  production: boolean;
  environment: string;
}
