import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanLoad {
  constructor(private authSrvc: AuthService, private router: Router){}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authSrvc.userIsAuthenticated) {
      this.router.navigateByUrl('/auth');
    }
    return this.authSrvc.userIsAuthenticated;
  }
}
