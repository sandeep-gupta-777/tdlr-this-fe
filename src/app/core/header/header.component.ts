import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IAuthState} from '../../auth/ngxs/auth.state';
import {ResetAuthToDefaultState, SetUserAction} from '../../auth/ngxs/auth.action';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Select() loggeduser$: Observable<IAuthState>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store) {
  }

  ngOnInit() {
  }

  async logout() {
    await this.authService.logout()
    this.store.dispatch([
      new ResetAuthToDefaultState()
    ]).subscribe(() => {
      this.router.navigate(['/auth', 'login']);
    });
  }

}
