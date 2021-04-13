import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Category } from './../../../interfaces/category';
import { PostsService } from './../../services/posts.service';
import { CategoryService } from './../../services/category.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  categories: Category[];
  error = false;
  errorMessage;
  title;
  category = '0';
  slug;
  body;
  status = 'published';

  constructor(
    private _categoryService: CategoryService,
    private _postService: PostsService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._categoryService.loadCategories()
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  onSubmit(form: NgForm) {
    if(form.valid) {
      this.error = false;

      const post = {
        category_id: this.category,
        title: this.title,
        // cover: this.cover,
        slug: this.slug,
        body: this.body,
        status: this.status
      };

      this._postService.storePost(post)
        .subscribe(
          (data) => {
            console.log(data);
            this._router.navigateByUrl('/panel');
          },
          ({ error }) => {
            this.error = true;
            this.errorMessage = error.error;
          }
        );
    }
  }
}
