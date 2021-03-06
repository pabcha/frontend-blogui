import { Router } from '@angular/router';
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

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) {
    this.isAuthenticated$ = (this.token) ?
      new BehaviorSubject<boolean>(true) : new BehaviorSubject<boolean>(false);
  }

  login(username, password): Observable<User> {
    return this._http.post<AuthResponse>(POST_LOGIN_URL, { username, password })
      .pipe(
        map((response) => response.data)
      );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('blogui-username');
    localStorage.removeItem('blogui-role');
    this.isAuthenticated$.next(false);
    this._router.navigateByUrl('/home');
  }

  setUser({ username, role, token }) {
    localStorage.setItem('token', token);
    localStorage.setItem('blogui-username', username);
    localStorage.setItem('blogui-role', role);
  }

  get token() {
    return localStorage.getItem('token');
  }

  get username() {
    return localStorage.getItem('blogui-username');
  }

  get userRole() {
    return localStorage.getItem('blogui-role');
  }
}
