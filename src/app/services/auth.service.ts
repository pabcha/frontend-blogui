import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { POST_LOGIN_URL } from './api-rest';
import { User } from '../interfaces/user';

type AuthResponse = {
  success: boolean,
  data: User,
  error: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) {}

  login(username, password): Observable<User> {
    return this._http.post<AuthResponse>(POST_LOGIN_URL, { username, password })
      .pipe(
        map((response) => response.data)
      );
  }
}
