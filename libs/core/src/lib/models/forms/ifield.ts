import { IFieldCompare } from '.';
import { FieldType } from './field-type.enum';

export interface IField {
    label: string;
    icon?: string;
    value?: any;
    type?: FieldType;
    name: string;
    required: boolean;
    options?: BaseModel[];
    disabled?:boolean;
    source?: string;
    validation?: any;
    subSelection?: string;
    compare?: IFieldCompare;
    onFocusOut?: any;
}

export class BaseModel{
    id: any ;
    name: any
}
