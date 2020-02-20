import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './shared/services/user.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate{
    constructor(private userService: UserService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.userService.isLoged === route.data.isLoged;
    }
}