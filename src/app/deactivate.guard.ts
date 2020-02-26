import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate{
  confirm():boolean
}
@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<CanComponentDeactivate>  {  
    canDeactivate( component: CanComponentDeactivate) : boolean 
     
     {
  return component.confirm();
        }
  
}
