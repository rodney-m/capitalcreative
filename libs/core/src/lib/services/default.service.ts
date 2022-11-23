import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, empty } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { FieldOptionData } from '../models/forms';
import { PAGEPARAMS, PageRequest, PageResult } from '../models/pagination';
import { UtilityService } from './utility.service';

export class DefaultService<T> {
  public getAll(): Observable<T[]> {
    const url = `/all`;
    return this.getFromUrl(url);
  }

  public getFromUrl(url: string): Observable<any> {
    return this.defaultHttpClient.get(`${this.baseUrl}${url}`)
      .pipe(catchError(() => empty()));
  }

  public getPaginated(request?: PageRequest, url?: string): Observable<PageResult<T[]>> {
    if (!url) url = '';
    url += `${PAGEPARAMS(request)}`;
    return this.getFromUrl(url);
  }

  public get(id: number | string): Observable<T> {
    return this.getFromUrl(`/${id}`);
  }



  public post(body: T): Observable<any> {
    return this.postToUrl('', body);
  }

  // public postToUrl(url: string, body: any): Observable<any> {
  //   return this.defaultHttpClient.post<any>
  //   (`${this.baseUrl}${url}`, body, {
  //     observe: 'response',
  //     headers: new HttpHeaders({'accept': 'text/plain',
  //     'Content-Type': 'application/json'})
  //   }).pipe(map((response: HttpResponse<any>) => response.body));
  // }
  public postToUrl(url: string, body: any): Observable<any> {
    return this.defaultHttpClient.post(`${this.baseUrl}${url}`, body, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => response.body));
  }
  // publiclogin(credentials: Login): Observable<void> {
  //   return this.http
  //     .post<any>(this.applicationConfigService.getEndpointFor('api/authenticate'), credentials)
  //     .pipe(map(response => this.authenticateSuccess(response, credentials.rememberMe)));
  // }

  public update(body: T): Observable<any> {
    return this.updateToUrl('', body);
  }

  public updateToUrl(url: string, body: any): Observable<any> {
    return this.defaultHttpClient.put(`${this.baseUrl}${url}`, body, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => response.body));
  }

  public delete(url: string): Observable<any> {
    return this.defaultHttpClient.delete(`${this.baseUrl}${url}`, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => response.body));
  }

  public search(parameter: any): Observable<T> {
    return this.getFromUrl(`?${parameter}`);
  }

  constructor(public defaultHttpClient: HttpClient, public baseUrl: string) { }

  public getFieldOptions(url?: string, name?: string, value?: string): Observable<FieldOptionData[]> {
    const dataAsync = this.getFromUrl(url ? url : '');
    return UtilityService.fieldOptionsMapper(dataAsync, name, value)
  }
}
