import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAuthenticated = false;
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._authService.isAuthenticated$
      .subscribe(isAuth => this.isAuthenticated = isAuth);
  }

  logout() {
    this._authService.logout();
  }

  goHome() {
    this._router.navigateByUrl('/');
  }

}
