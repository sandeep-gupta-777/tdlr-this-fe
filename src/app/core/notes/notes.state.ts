import {Action, State, StateContext} from '@ngxs/store';
import {INote} from '../../../interfaces/note';
import {AddNewCommentInNoteInNoteList, SetNoteInNoteList} from './notes.actions';

export interface INoteListState {
  noteList: INote[]
}

@State<INoteListState>({
  name: 'notelist',
  defaults: {
    noteList: []
  }
})
export class NoteListStateReducer {

  @Action(SetNoteInNoteList)
  setNoteInNoteList({setState, dispatch, getState, patchState}: StateContext<INoteListState>, {payload}: SetNoteInNoteList) {
    debugger;
    let state = getState();
    let noteList = state.noteList || (state.noteList = []);
    let note = noteList.find((note) => note.id === payload.note.id);
    if (note) {
      Object.assign(note, payload.note);
    } else {
      state.noteList.push(payload.note);
    }

    setState({...state});
  }

  @Action(AddNewCommentInNoteInNoteList)
  addNewCommentInNoteInNoteList({setState, dispatch, getState, patchState}: StateContext<INoteListState>, {payload}: AddNewCommentInNoteInNoteList) {
    let state = getState();
    let noteList = state.noteList || (state.noteList = []);
    let note = noteList.find((note) => note.id === payload.id);
    note.note_comments.push(payload.comment);
    setState({...state});
  }
}
