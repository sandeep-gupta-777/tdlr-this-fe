import {Action, State, StateContext} from '@ngxs/store';
import {CreateNewNote} from './notes.action';
import { INote } from '../../../../interfaces/note';
import { ConstantService } from '../../../constant.service';


export interface INoteState {
  currentEditedNote?: INote;
  notePreviewList:INote[],
  noteExpandedList:INote[]
}

@State<INoteState>({
  name:'notes',
  defaults:null
})
//same as reducer
export class NoteStateReducer {

  constructor(private constantService:ConstantService){}
  @Action(CreateNewNote)
  createNote({patchState, setState, getState,dispatch}:StateContext<INoteState>, payload : CreateNewNote){
    // patchState({currentEditedNote});
  }
}
