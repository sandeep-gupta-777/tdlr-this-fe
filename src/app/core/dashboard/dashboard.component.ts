import { Component, OnInit } from '@angular/core';
import {IUser} from '../../../interfaces/user';
import {ServerService} from '../../server.service';
import {ActivatedRoute} from '@angular/router';
import {ConstantService} from '../../constant.service';
import {INote} from '../../../interfaces/note';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IAuthState} from '../../auth/ngxs/auth.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  noteList:INote[];
  @Select() loggeduser$: Observable<IAuthState>;
  user_id:string;
  constructor(
    private serverService: ServerService,
    private constantService: ConstantService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.loggeduser$.subscribe((value)=>{
      debugger;
      this.user_id=value.user._id
    });
    this.tabChanged();
  }

  tabChanged(){
    let url = this.constantService.getNotesCreatedByUserUrl(this.user_id);
    this.serverService.makeGetReq<INote[]>({url})
      .subscribe((value) => {
        this.noteList = value.body;
      });
  }

}
