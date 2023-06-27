import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
class PermissionsService {

  constructor(private router: Router) {}
  private SESSION_STORAGE_KEY = 'oui-session-data';
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      //your logic goes here
      console.log('canActivate@PermissionsService');
      console.log({next,state,UrlTree, logged: Boolean(localStorage.getItem(this.SESSION_STORAGE_KEY))})
      return Boolean(localStorage.getItem(this.SESSION_STORAGE_KEY));
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(PermissionsService).canActivate(next, state);
}
