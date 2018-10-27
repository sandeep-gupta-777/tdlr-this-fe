import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';import {Observable} from 'rxjs';
import { ServerService } from '../../../server.service';
import { ConstantService } from '../../../constant.service';
import { INote } from '../../../../interfaces/note';
import {Select} from '@ngxs/store';
import {IAuthState} from '../../../auth/ngxs/auth.state';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  @Select() loggeduser$: Observable<IAuthState>;
  note$: Observable<INote>;
  note_id:string;
  user_id:string;
  hasUserLikedNote:boolean|string = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serverService: ServerService,
    private constantService: ConstantService,
  ) {
  }

  ngOnInit() {
    this.loggeduser$.subscribe((value)=>{this.user_id = value.user._id})
    let note_id: string = this.activatedRoute.snapshot.paramMap.get('_id');
    this.note$ = this.serverService.makeGetReq<INote>({url: this.constantService.getNoteUrl(note_id)})
      .map((value)=>value.body)
      .do((note)=>{
        this.note_id = note._id;
        this.hasUserLikedNote = note.note_liked_user_ids.find((value)=>{
          return value === this.user_id;
        })
      })
  }

  toggleLike(){
    this.hasUserLikedNote = !this.hasUserLikedNote;
    let toggleLikeUrl = this.constantService.getToggleLikeUrl(this.note_id,this.user_id);
    this.serverService.makePostReq({url:toggleLikeUrl, body:{}})
      .subscribe((value)=>{
        console.log(value);
      })
  }
}
