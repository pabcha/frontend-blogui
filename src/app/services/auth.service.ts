import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
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
  isAuthenticated$: BehaviorSubject<boolean>;

  constructor(private _http: HttpClient) {
    this.isAuthenticated$ = (localStorage.getItem('token')) ?
      new BehaviorSubject<boolean>(true) : new BehaviorSubject<boolean>(false);
  }

  login(username, password): Observable<User> {
    return this._http.post<AuthResponse>(POST_LOGIN_URL, { username, password })
      .pipe(
        map((response) => response.data)
      );
  }
}
