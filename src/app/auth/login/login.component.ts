import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngxs/store';
import {Router} from '@angular/router';
import {ServerService} from '../../server.service';
import {ConstantService} from '../../constant.service';
import {IUser} from '../../../interfaces/user';
import {SetUserAction} from '../ngxs/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private serverService: ServerService,
    private constantsService: ConstantService,
    private router: Router,
    private store: Store) { }


  @ViewChild('loginForm') f : NgForm;

  ngOnInit() {
  }

  onSubmit(){
    if(!this.f.valid) return;
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
