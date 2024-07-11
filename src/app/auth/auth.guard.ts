import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './authservice.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('AuthGuard: Checking authentication status'); // Debug
    const isAuthenticated = this.authService.isAuthenticated();
    console.log('AuthGuard: isAuthenticated =', isAuthenticated); // Debug
    if (isAuthenticated) {
      console.log('AuthGuard: User is authenticated, access granted'); // Debug
      return true;
    } else {
      console.log('AuthGuard: User is not authenticated, redirecting to login'); // Debug
      this.router.navigate(['/login']);
      return false;
    }
  }
}
