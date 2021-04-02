import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../../interfaces/post';
import { GET_POSTS_URL } from '../config/api-rest';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

type PostResponse = {
  success: boolean,
  data: Post[],
  error: string
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http: HttpClient) {}

  loadPosts(): Observable<Post[]> {
    return this._http.get<PostResponse>(GET_POSTS_URL)
      .pipe(
        map((response) => response.data)
      );
  }
}
