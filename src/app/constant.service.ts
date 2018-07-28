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





}
