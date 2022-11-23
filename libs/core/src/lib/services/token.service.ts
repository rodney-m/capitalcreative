import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public setToken(token: string): void {
    localStorage.setItem('trogon_token', token);
  }

  public getToken(): any {
    return localStorage.getItem('trogon_token');
  }

  public clearToken() {
    localStorage.clear();
  }
}
