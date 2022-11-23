import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { DefaultService } from './default.service';

@Injectable()
export class ApiService extends DefaultService<any> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `${environment.apiUrl}/v1`);
  }
}

