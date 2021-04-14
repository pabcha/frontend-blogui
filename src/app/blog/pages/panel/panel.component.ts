import { AuthService } from './../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  username;
  selectedOption;

  constructor(
    private _userService: UserService,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.username = this._authService.username;
    this._activatedRoute.queryParams
      .subscribe((params) => {
        const status = params.section || 'published';
        this.selectedOption = status;

        this._userService.loadMyPosts(status)
          .subscribe(myposts => this.posts = myposts);
      })
  }

  showPosts(status) {
    this.selectedOption = status;
    this._router.navigate(['/panel'], { queryParams: {section: status} });
  }

  isOptionSelected(option) {
    return this.selectedOption === option;
  }
}
