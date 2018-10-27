import { Component, OnInit } from '@angular/core';
import { ConstantService } from '../../../constant.service';
import { INote } from '../../../../interfaces/note';
import { ServerService } from '../../../server.service';
import {Router} from '@angular/router';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IAuthState} from '../../../auth/ngxs/auth.state';

@Component({
  selector: 'app-create-new-note',
  templateUrl: './create-new-note.component.html',
  styleUrls: ['./create-new-note.component.scss']
})
export class CreateNewNoteComponent implements OnInit {

  @Select()loggeduser$:Observable<IAuthState>;
  htmlContent:string;
  title:string;
  editorConfig = this.constantService.EDITOR_CONFIG;
  constructor(
    private serverService:ServerService,
    private router:Router,
    private constantService: ConstantService) { }
  ngOnInit() {
  }

  createNewNote(){
    let url =  this.constantService.BACKEND_CREATE_NEW_NOTE_URL;
    console.log(url);

    this.loggeduser$.subscribe(({user})=>{
      let note: INote = {
        note_title: this.title,
        note_body_html:this.htmlContent,
        note_author_id:user._id,
        note_author_name:user.user_name,
        note_author_avatar_url:user.user_avatar_url,
        note_created:Date.now(),
        note_comments:[]
      };
      this.serverService.makePostReq<{body:INote}>({url,body:note})
        .subscribe((value)=>{
          this.router.navigate(['/core','note', value.body._id]);
        })
    })
  }
}
