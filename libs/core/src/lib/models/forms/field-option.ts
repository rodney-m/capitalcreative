import { FieldOptionApi } from './field-option-api';
import { Observable } from 'rxjs';

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