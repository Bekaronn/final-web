import { HttpClient } from '@angular/common/http';
import { Token } from '../interfaces/login.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _url: string = 'http://localhost:8000/api'
  private name: string;
  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(
      `${this._url}/login/`,
      {username, password},
    )
  }
}
