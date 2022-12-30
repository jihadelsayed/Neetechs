import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if (localStorage.getItem('userToken') != null)
      return true;
      else
      window.location.href = environment.LoginURL+window.navigator.language.slice(0, 2)+'/#/signin/' + "?" + "host=" + window.location.host + "&" + "language=" + window.navigator.language + "&" + "pathname=" + window.location.pathname;
      return false;
  }
}
