
import { Observable } from 'rxjs';
import { FieldOptionApi } from './field.option.api';

export interface FieldOption{
  data: FieldOptionData[];
  dataAsync?: Observable<FieldOptionData[]>;
  api?: FieldOptionApi;
  last?: boolean;
}

export interface FieldOptionData{
  name: string;
  value: any;
}

export interface EmailFieldOption{
  value: string;
}
