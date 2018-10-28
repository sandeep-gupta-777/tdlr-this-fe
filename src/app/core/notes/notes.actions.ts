import {INote} from '../../../interfaces/note';
import {IComment} from '../../../interfaces/comment';

export class SetNoteInNoteList{

  static readonly type = '[note list] SetNoteInNoteList';
  constructor(public payload:{note:INote}){}
}

export class AddNewCommentInNoteInNoteList{

  static readonly type = '[note list] AddNewCommentInNoteInNoteList';
  constructor(public payload:{comment:IComment, id:string}){}
}
