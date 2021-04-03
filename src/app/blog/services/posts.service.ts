import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from '../../interfaces/post';
import { GET_POSTS_URL, GET_POST_URL } from './api-rest';

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

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http: HttpClient) {}

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
}
