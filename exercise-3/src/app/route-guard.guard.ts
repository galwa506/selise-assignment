import { Injectable } from '@angular/core';
import { ClientComponent } from './client/client.component';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class routeGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userRole = 'user'; 

    const allowedRoutes = ['/client/dashboard']; 

    if (userRole === 'user' && !allowedRoutes.some(route => state.url.startsWith(route))) {
      // Redirect to access denied page
      this.router.navigate(['/access-denied']);
      return false;
    }

    return true;
  }
}
