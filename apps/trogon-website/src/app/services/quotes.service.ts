import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http : HttpClient) { }

  createQuote(quoteDetails : any): any {
    console.log(`${environment.apiUrl}/get-quote`)
    return this.http.post<any>(`${environment.apiUrl}/v1/get-quote`, quoteDetails)
  }
  

}
