import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendContactUsRequest(request:any) : any {
    return this.http.post<any>(`https://trogon-be.herokuapp.com/v2/send-email/contact-us`, request)
  }
}
