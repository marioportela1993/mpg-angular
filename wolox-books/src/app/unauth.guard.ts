import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {
  constructor(private service: UserService, private router: Router){}
  
  canActivate(): boolean {
    if (this.service.loggedIn()) {
      this.router.navigate(['books']);
      return false;
    }
      return true;
  }
}
