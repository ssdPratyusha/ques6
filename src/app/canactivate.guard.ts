import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate {
  canActivate()

    {
      alert('user wants to login')
    return true;
  }
  
}
