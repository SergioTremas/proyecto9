import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private login: LoginService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.login.checkCookie('tokenLogin');
  }



}
