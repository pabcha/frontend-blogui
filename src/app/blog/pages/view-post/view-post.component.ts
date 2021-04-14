import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from './../../../services/user.service';
import { CategoryService } from './../../services/category.service';
import { Post } from '../../../interfaces/post';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent {
  post: Post;
  categories: Category[];
  error;
  errorMessage;

  constructor(
    private _userService: UserService,
    private _categoryService: CategoryService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    const slug = this._activatedRoute.snapshot.params.slug;

    this._userService
      .loadMyPost(slug)
      .subscribe((post) => this.post = post);

    this._categoryService.loadCategories()
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  onSubmit(form: NgForm) {
    if(form.valid) {
      this._router.navigateByUrl('/panel');
    }
  }

  deletePost() {
    if(window.confirm('Are you sure?')) {
      this._router.navigateByUrl('/panel');
    }
  }

}
