import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post-inline-list',
  templateUrl: './post-inline-list.component.html',
  styleUrls: ['./post-inline-list.component.css']
})
export class PostInlineListComponent {
  @Input() posts: Post[];
}
