import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post-inline-card',
  templateUrl: './post-inline-card.component.html',
  styleUrls: ['./post-inline-card.component.css']
})
export class PostInlineCardComponent {
  @Input() post: Post;
}
