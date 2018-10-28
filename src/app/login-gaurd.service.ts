import { Injectable } from '@angular/core';
import {IAuthState} from './auth/ngxs/auth.state';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class LoginGaurdService {

  constructor(private router: Router) {
  }

  @Select() loggeduser$: Observable<IAuthState>;

  canActivate() {


    return this.loggeduser$.map((value: IAuthState) => {
      if (value.user == null) {
        return true;
      } else {
        this.router.navigate(['core/dashboard']);
        return false;
      }
    });
  }

  canActivateChild() {

    return this.loggeduser$.map((value: IAuthState) => {
      if (value.user == null) {
        return true;
      } else {
        this.router.navigate(['core','dashboard']);
        return false;
      }
    });
  }
}
