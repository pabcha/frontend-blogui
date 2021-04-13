import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { getUserPostsUrl } from './api-rest';
import { Post } from '../interfaces/post';
import { AuthService } from './auth.service';

type UserPostsResponse = {
  success: boolean,
  data: Post[],
  error: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: HttpClient,
    private _authService: AuthService
  ) {}

  loadMyPosts(): Observable<Post[]> {
    const username = this._authService.username;
    if (!username) return;

    const URL = getUserPostsUrl(username);

    return this._http.get<UserPostsResponse>(URL)
      .pipe(
        map((response) => response.data)
      );
  }
}
