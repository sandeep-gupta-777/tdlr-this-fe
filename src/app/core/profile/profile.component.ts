import { Component, OnInit } from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IUser} from '../../../interfaces/user';
import {IAuthState} from '../../auth/ngxs/auth.state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Select() loggeduser$:Observable<IAuthState>;
  constructor() { }

  ngOnInit() {
  }

}
