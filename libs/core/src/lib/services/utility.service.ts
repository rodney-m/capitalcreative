import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { FieldType } from '@ngx-formly/core';
import { FieldOptionData, IField } from '../models/forms';

export class UtilityService {
  public static fieldOptionsMapper(dataAsync: Observable<any[]>, name?: string, value?: string):
    Observable<FieldOptionData[]> {
    return dataAsync.pipe(map(data => this.dataOptionsMapper(data, name, value)));
  }

  public static dataOptionsMapper(content: any[], name?: string, value?: string): FieldOptionData[] {
    return content.map(function(data) {
      if (!isNaN(+data)) data = data.toString();
      return { name: name ? data[name] : data, value: value ? data[value] : data };
    });
  }

  public static getField(label: string, value: any, type?: any): IField {
    return getField(label, value, type);
  }

  public static getOrEmpty(name: string, obj: any): any {
    if (obj && obj[name]) return obj[name];
    return {};
  }
}

export function getField(label: string, value: any, type?: any): IField |any {
  return { name: label, value: value, label: label, required: true, type: type };
}
