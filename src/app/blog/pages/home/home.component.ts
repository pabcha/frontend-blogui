import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../../interfaces/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[];

  constructor(private _postsService: PostsService) {}

  ngOnInit() {
    this._postsService
      .loadPosts()
      .subscribe((posts) => this.posts = posts);
  }
}
