import { PostsService } from './../../services/posts.service';
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
  section;
  error;
  errorMessage;

  constructor(
    private _userService: UserService,
    private _postService: PostsService,
    private _categoryService: CategoryService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    const slug = this._activatedRoute.snapshot.params.slug;

    this._userService
      .loadMyPost(slug)
      .subscribe((post) => {
        this.post = post;
        this.section = post.status;
      });

    this._categoryService.loadCategories()
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  onSubmit(form: NgForm) {
    if(form.valid) {
      this.goBack();
    }
  }

  deletePost() {
    if(window.confirm('Are you sure?')) {
      this._postService.deletePost(this.post.slug)
        .subscribe(
          (data) => { this.goBack() },
          ({error}) => console.error(error.error)
        );
    }
  }

  goBack() {
    this._router.navigate(['/panel'], { queryParams: {section: this.section} })
  }

}
