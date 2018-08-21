import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router'
import {Observable} from 'rxjs/Observable'
import {Injectable} from '@angular/core'
import {AuthService} from './auth.service'

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private auth:AuthService,private router: Router){}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
    return this.auth.isAuth().then((isLoggedIn:boolean)=>{
      if (!isLoggedIn) {
        this.router.navigate(['/404']);
      }
      return isLoggedIn
    })
  }
  
}