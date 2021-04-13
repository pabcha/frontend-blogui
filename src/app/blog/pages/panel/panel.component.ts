import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  posts: Post[];

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this._userService.loadMyPosts()
      .subscribe(myposts => this.posts = myposts);
  }
}
