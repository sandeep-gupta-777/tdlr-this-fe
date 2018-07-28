import { INote } from "../../../../interfaces/note";

export class CreateNewNote {
  static readonly type = '[note] create new note';
  constructor(public payload:{state:INote}){

  }
}

