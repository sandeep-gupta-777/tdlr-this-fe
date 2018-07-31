import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IUser} from '../../../interfaces/user';
import {IAuthState} from '../../auth/ngxs/auth.state';
import {ServerService} from '../../server.service';
import {ConstantService} from '../../constant.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Select() loggeduser$: Observable<IAuthState>;
  user: IUser;

  constructor(
    private serverService: ServerService,
    private constantService: ConstantService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    let user_id = this.activatedRoute.snapshot.paramMap.get('_id');
    if (!user_id) {
      this.loggeduser$
        .subscribe((value) => {
          this.user = value.user;
        });
    } else {
      let url = this.constantService.getUserUrl(user_id);
      this.serverService.makeGetReq<IUser>({url})
        .subscribe((value) => {
          this.user = value.body;
        });
    }
  }

}
