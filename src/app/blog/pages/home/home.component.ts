import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../services/category.service';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../../interfaces/post';
import { Category } from '../../../interfaces/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[];
  categories: Category[];
  isRequesting: boolean;

  constructor(
    private _postsService: PostsService,
    private _categoryService: CategoryService
  ) {}

  ngOnInit() {
    this._postsService
      .loadPosts()
      .subscribe((posts) => this.posts = posts);

    this._categoryService
      .loadCategories()
      .subscribe((categories) => this.categories = categories);
  }

  handleSelect(category) {
    if (this.isRequesting) {
      return;
    }

    this.isRequesting = true;

    this._postsService
      .loadPostsByCategory(category)
      .subscribe((posts) => {
        this.posts = posts;
        this.isRequesting = false;
      });
  }
}
