import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from '../../interfaces/post';
import { GET_POSTS_URL, GET_POST_URL, POST_POSTS_URL } from './api-rest';

type PostsResponse = {
  success: boolean,
  data: Post[],
  error: string
}

type PostResponse = {
  success: boolean,
  data: Post,
  error: string
}

type PostStoreResponse = {
  success: boolean,
  data: Post,
  error: string
}

type storePost = {
  category_id: string,
  title: string,
  slug: string,
  body: string,
  status: string
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private _http: HttpClient,
    private _authService: AuthService
  ) {}

  loadPosts(): Observable<Post[]> {
    return this._http.get<PostsResponse>(GET_POSTS_URL)
      .pipe(
        map((response) => response.data)
      );
  }

  loadPost(slug): Observable<Post> {
    return this._http.get<PostResponse>(`${GET_POST_URL}${slug}`)
      .pipe(
        map((response) => response.data)
      );
  }

  loadPostsByCategory(category): Observable<Post[]> {
    return this._http.get<PostsResponse>(`${GET_POSTS_URL}?category=${category}`)
      .pipe(
        map((response) => response.data)
      );
  }

  storePost(post: storePost) {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this._authService.token}`});
    return this._http.post<PostStoreResponse>(`${POST_POSTS_URL}`, post, { headers });
  }
}
