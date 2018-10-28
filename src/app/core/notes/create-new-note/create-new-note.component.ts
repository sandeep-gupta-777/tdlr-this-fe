import {Component, OnInit} from '@angular/core';
import {ConstantService} from '../../../constant.service';
import {INote} from '../../../../interfaces/note';
import {ServerService} from '../../../server.service';
import {Router} from '@angular/router';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IAuthState} from '../../../auth/ngxs/auth.state';
import {NotesCrudService} from '../../../notes-crud.service';
import {IUser} from '../../../../interfaces/user';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-create-new-note',
  templateUrl: './create-new-note.component.html',
  styleUrls: ['./create-new-note.component.scss']
})
export class CreateNewNoteComponent implements OnInit {

  @Select() loggeduser$: Observable<IAuthState>;
  htmlContent: string = '';
  title: string;
  editorConfig = this.constantService.EDITOR_CONFIG;

  constructor(
    private serverService: ServerService,
    private router: Router,
    private authService: AuthService,
    private firebaseCrudService: NotesCrudService,
    private constantService: ConstantService) {
  }

  ngOnInit() {
  }

  createNewNote() {

    let user: IUser = this.authService.user;
    let note: INote = {
      note_title: this.title,
      note_body_html: this.htmlContent,
      note_author_uid: user.uid,
      note_author_name: user.first_name,
      note_author_photoURL: user.photoURL,
      note_created: Date.now(),
      note_comments:[],
      note_liked_user_ids:[],
      note_updated:Date.now()
    };
    this.firebaseCrudService.addNote(note)
      .then((doc) => {

        this.router.navigate(['/core', 'note', doc.id]);
      })
      .catch((err) => console.error('error', err));
  }
}
