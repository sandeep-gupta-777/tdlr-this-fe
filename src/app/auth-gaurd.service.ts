import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, Route, Router, RouterLinkActive} from '@angular/router';
import {IAuthState} from './auth/ngxs/auth.state';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate, CanActivateChild {
  constructor(private router: Router) {
  }

  @Select() loggeduser$: Observable<IAuthState>;

  canActivate() {
    // return true;
    return this.loggeduser$.map((value: IAuthState) => {
      if (value.user != null) {
        return true;
      } else {
        this.router.navigate(['auth', 'login']);
        return false;;
      }
    });
  }

  canActivateChild() {
    // return true;
    return this.loggeduser$.map((value: IAuthState) => {
      if (value.user != null) {
        return true;
      } else {
        this.router.navigate(['auth', 'login']);
        return false;
      }
    });
  }

}
