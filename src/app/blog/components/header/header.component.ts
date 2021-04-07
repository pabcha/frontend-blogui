import { Component } from '@angular/core';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAuthenticated = false;
  constructor(private _authService: AuthService) {}

  ngOnInit() {
    this._authService.isAuthenticated$
      .subscribe(isAuth => this.isAuthenticated = isAuth);
  }

  logout() {
    this._authService.logout();
  }

}
