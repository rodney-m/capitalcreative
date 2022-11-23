import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  createUser(user: any):any {
    return this.http.post<any>(`${environment.apiUrl}/v1/users`, user)
  }
  getAllUsers():any {
    return this.http.get<any>(`${environment.apiUrl}/v1/users/all`)
  }
}
