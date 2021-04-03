import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Category } from './../../interfaces/category';
import { GET_CATEGORIES_URL } from './api-rest';

type CategoriesResponse = {
  success: boolean,
  data: Category[],
  error: string
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) {}

  loadCategories(): Observable<Category[]> {
    return this._http.get<CategoriesResponse>(GET_CATEGORIES_URL)
      .pipe(
        map((response) => response.data)
      );
  }
}
