import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private auth:AuthenticationService,private route:Router){}
  canActivate():boolean
  {
      if (this.auth.authcheck())
      {
        return true;
      }
      else 
      {
        this.route.navigate(['/login']);
        return false;
      }
  }
}
