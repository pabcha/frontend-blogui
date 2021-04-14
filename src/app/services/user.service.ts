import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { getUsersPostsUrl, getUsersPostUrl } from './api-rest';
import { Post } from '../interfaces/post';
import { AuthService } from './auth.service';

type UserPostsResponse = {
  success: boolean,
  data: Post[],
  error: string
}

type UserPostResponse = {
  success: boolean,
  data: Post,
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

  loadMyPosts(status = 'published'): Observable<Post[]> {
    const username = this._authService.username;
    if (!username) return;

    const URL = getUsersPostsUrl(username);
    const query = `?status=${status}`;

    return this._http.get<UserPostsResponse>(URL + query)
      .pipe(
        map((response) => response.data)
      );
  }

  loadMyPost(slug): Observable<Post> {
    const username = this._authService.username;
    const token = this._authService.token;
    if (!username) return;

    const URL = getUsersPostUrl(username, slug);
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}`});

    return this._http.get<UserPostResponse>(URL, { headers })
      .pipe(
        map((response) => response.data)
      );
  }
}
