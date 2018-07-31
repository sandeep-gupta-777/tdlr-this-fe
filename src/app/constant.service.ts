import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() {
  }

  BACKEND_URL = 'http://localhost:3000/';
  BACKEND_CREATE_NEW_NOTE_URL = this.BACKEND_URL + 'create/note';
  readonly EDITOR_CONFIG = {
    "editable": true,
    "spellcheck": true,
    "height": "300px",
    "minHeight": "auto",
    "width": "auto",
    "minWidth": "0",
    "translate": "yes",
    "enableToolbar": true,
    "showToolbar": true,
    "placeholder": "Enter text here...",
    "imageEndPoint": "",
    "toolbar": [
      ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
      ["fontName", "fontSize", "color"],
      ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
      ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
      ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
      ["link", "unlink", "image", "video"]
    ]
  };

  getNoteUrl(_id: string) {
    return this.BACKEND_URL + `read/note/${_id}`;
  }
  getLoginUrl() {
    return this.BACKEND_URL + "login";
  }
  getSignupUrl() {
    return this.BACKEND_URL + "signup";
  }
  getNewCommentCreationUrl(post_id) {
    return this.BACKEND_URL + `create/comment?post_id=${post_id}`;
  }
  getCommentListUrl(reqObj:{post_id:string,page:number, limit:number}) {
    return this.BACKEND_URL + `read/comments?post_id=${reqObj.post_id}&page=${reqObj.page}&limit=${reqObj.limit}`;
  }
  getUserUrl(_id:string){
    return this.BACKEND_URL + `read/user/${_id}`;
  }
  getNotesCreatedByUserUrl(_id:string){
    return this.BACKEND_URL + `read/notes?note_author_id=${_id}`;
  }
  getToggleLikeUrl(note_id:string, user_id:string){
    return this.BACKEND_URL + `togglelike?note_id=${note_id}&note_author_id=${user_id}`;
  }
}
