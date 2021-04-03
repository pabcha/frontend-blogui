import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../../interfaces/post';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  post: Post;

  constructor(
    private _postsService: PostsService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const slug = this._activatedRoute.snapshot.params.slug;

    this._postsService
      .loadPost(slug)
      .subscribe((post) => this.post = post);
  }
}
