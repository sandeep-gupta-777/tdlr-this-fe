import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ServerService} from '../../../server.service';
import {ConstantService} from '../../../constant.service';
import {INote} from '../../../../interfaces/note';
import {Select, Store} from '@ngxs/store';
import {IAuthState} from '../../../auth/ngxs/auth.state';
import 'rxjs/add/operator/do';
import {NotesCrudService} from '../../../notes-crud.service';
import * as firebase from 'firebase';
import {INoteState} from '../ngxs/notes.state';
import {INoteListState} from '../notes.state';
import {AddNewCommentInNoteInNoteList, SetNoteInNoteList} from '../notes.actions';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  @Select() loggeduser$: Observable<IAuthState>;
  @Select() notelist$: Observable<INoteListState>;
  note$: Observable<INote>;
  note: INote;
  note_id: string;
  uid: string;
  hasUserLikedNote: boolean | string = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serverService: ServerService,
    private store: Store,
    private notesCrudService: NotesCrudService,
    private constantService: ConstantService,
  ) {
  }

  ngOnInit() {
    let note_id: string = this.note_id = this.activatedRoute.snapshot.paramMap.get('_id');
    this.notelist$.subscribe((noteListState) => {
      this.note = noteListState.noteList.find((note) => note.id === this.note_id);
    });
    this.loggeduser$.subscribe((value) => {
      this.uid = value.user.uid;
    });
    this.notesCrudService.getDocRef(note_id).get()
      .subscribe((data) => {
        this.note = data.data();
        this.note.id = data.id;
        this.store.dispatch([
          new SetNoteInNoteList({note: this.note})
        ]);
      });
  }

  toggleLike() {
    this.hasUserLikedNote = !this.hasUserLikedNote;
    let toggleLikeUrl = this.constantService.getToggleLikeUrl(this.note_id, this.uid);
    this.serverService.makePostReq({url: toggleLikeUrl, body: {}})
      .subscribe((value) => {
        console.log(value);
      });
  }

  createNewComment(newComment) {
    console.log(newComment);
    /*push new comment into INote.note_comments array*/
    let noteRef = this.notesCrudService.getDocRef(this.note_id);
    this.store.dispatch([
      new AddNewCommentInNoteInNoteList({id:this.note_id, comment: newComment})
    ]);

    noteRef.update({
      note_comments: firebase.firestore.FieldValue.arrayUnion(newComment)
    })
      .then(value => console.log(value))
      .catch(err => console.log(err));
  }
}
