import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { User } from './../../../interfaces/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  error = false;
  errorMessage;
  username;
  password;

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) {}

  onSubmit(form: NgForm) {
    this._authService
      .login(this.username, this.password)
      .subscribe(
        (user: User) => {
          localStorage.setItem('token', user.token);
          form.resetForm();
          this._authService.isAuthenticated$.next(true);
          this._router.navigateByUrl('/panel');
        },
        ({ error }) => {
          this.error = true;
          this.errorMessage = error.error;
        }
      );
  }
}
