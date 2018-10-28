import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngxs/store';
import {ActivatedRoute, Router} from '@angular/router';
import {ServerService} from '../../server.service';
import {ConstantService} from '../../constant.service';
import {IUser} from '../../../interfaces/user';
import {SetUserAction} from '../ngxs/auth.action';
import {AuthService} from '../auth.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private serverService: ServerService,
    private constantsService: ConstantService,
    public authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  isItSignUpPage:boolean;
  @ViewChild('loginForm') f : NgForm;

  ngOnInit() {
    this.isItSignUpPage = this.activatedRoute.snapshot.firstChild.data.name ==='SIGNUP';
    this.authService.uid$
      .subscribe((authState) => {
        if(!authState || !authState.uid) return;

        this.store.dispatch([
          new SetUserAction({user:{
            uid:authState.uid,
              first_name:authState.displayName,
              email:authState.email,
              phoneNumber:authState.phoneNumber,
              isAnonymous:authState.isAnonymous,
              photoURL:authState.photoURL,

          }})
        ]);
        this.router.navigate(['/core/dashboard']);
      })
  }

  trySignup(){
    let signupData:IUser = this.f.value;
    let signupUrl = this.constantsService.getSignupUrl();

    this.serverService.makePutReq<{body:IUser}>({url:signupUrl, body:signupData})
      .subscribe(({body})=>{
          this.store.dispatch([
            new SetUserAction({user: body}),
          ]);
          this.router.navigate(['/core', 'profile']);
        }
      )

  }

  tryLogin(){
    if(!this.f.valid) return;
    if(this.isItSignUpPage){
      this.trySignup();
      return;
    }
    let loginData:IUser = this.f.value;
    let loginUrl = this.constantsService.getLoginUrl();

    this.serverService.makePostReq<{body:IUser}>({url:loginUrl, body:loginData})
      .subscribe(({body})=>{
          this.store.dispatch([
            new SetUserAction({user: body}),
          ]);
          this.router.navigate(['/core', 'profile']);
        }

      )
  }

}
