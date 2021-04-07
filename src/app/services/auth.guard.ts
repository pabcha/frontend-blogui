import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    const isAuth = this._authService.isAuthenticated$.value;

    if (!isAuth) {
      this._router.navigateByUrl('/signin');
      return false;
    }
    return true;
  }
}
