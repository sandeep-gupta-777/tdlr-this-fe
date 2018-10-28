import {Injectable} from '@angular/core';
import {map, switchMap} from 'rxjs/operators';
import {Observable, of as observableOf} from 'rxjs';
import {auth} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {Select} from '@ngxs/store';
import {IAuthState} from './ngxs/auth.state';
import {IUser} from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  @Select() loggeduser$: Observable<IAuthState>;
  uid$ = this.angularFireAuth.authState;
  // isAdmin = this.uid.pipe(map((uid)=>uid && ));
  // isAdmin: Observable<boolean> = this.uid.pipe(switchMap((uid) => {
  //   return observableOf(false);//: uid? observableOf(false):this.angularFireDatabase.object<boolean>('/admin/'+uid).valueChanges()
  // }));
  user:IUser;
  constructor(
    private angularFireAuth: AngularFireAuth,
  ) {
    this.loggeduser$.subscribe(({user}) => {
      this.user = user;
    });

  }




  login() {
    console.log('service>login');
    this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    // this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    return this.angularFireAuth.auth.signOut();
  }
}
