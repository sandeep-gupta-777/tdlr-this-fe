import { Component, OnInit } from '@angular/core';
import {IUser} from '../../../interfaces/user';
import {ServerService} from '../../server.service';
import {ActivatedRoute, Router} from '@angular/router';
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
  activeTab:string = "Notes";
  uid:string;
  constructor(
    private serverService: ServerService,
    private constantService: ConstantService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.loggeduser$.subscribe((value)=>{
      this.uid=value.user.uid;
      this.tabChanged(this.activeTab);
    });
    this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('tab')||'Notes';
  }

  tabChanged(activeTab:string){
    this.activeTab = activeTab;
    if(activeTab==='Notes'){
      let url = this.constantService.getNotesCreatedByUserUrl(this.uid);
      this.serverService.makeGetReq<INote[]>({url})
        .subscribe((value) => {
          this.noteList = value.body;
        });
    }else if(activeTab==='Likes'){

      let url = this.constantService.getNotesLikedByUser(this.uid);
      this.serverService.makeGetReq<INote[]>({url})
        .subscribe((value) => {
          this.noteList = value.body;
        });
    }else if(activeTab==='Comments'){
      let url = this.constantService.getNotesCommentedOnByUser(this.uid);
      this.serverService.makeGetReq<INote[]>({url})
        .subscribe((value) => {
          this.noteList = value.body;
        });
    }else if(activeTab==='Read'){
      let url = this.constantService.getNotesCreatedByUserUrl(this.uid);
      this.serverService.makeGetReq<INote[]>({url})
        .subscribe((value) => {
          this.noteList = value.body;
        });
    }
    this.router.navigate(['/core/dashboard'], {queryParams:{tab:activeTab}});

  }

}
