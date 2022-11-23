import { IField } from '.';
import { FormType } from './form-type.enum';
import { IButton } from './ibutton';

export interface IForm {
    type?: FormType,
    title?: string;
    fields: IField[];
    buttons: IButton[];
    data?: any;
    instruction?: string;
    id?: number;
}