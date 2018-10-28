import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {CollectionReference, DocumentChangeAction} from '@angular/fire/firestore/interfaces';
import {IUser} from '../interfaces/user';
import {User} from 'firebase';
import {INote} from '../interfaces/note';
import {CrudBase} from './crud-base';
// import DocumentSnapshot = firebase.firestore.DocumentSnapshot;

export enum EFireBaseCollections {
  notes="notes",
  users="users",
}

@Injectable({
  providedIn: 'root'
})
export class NotesCrudService{
  user$: Observable<IUser[]>;
  notesCollection: AngularFirestoreCollection<INote>;
  constructor(private angularFirestore: AngularFirestore) {
    this.notesCollection = angularFirestore.collection(EFireBaseCollections.notes);
  }

  collectionName = EFireBaseCollections.notes;
  getDocRef(id){
    return this.angularFirestore.doc(`${this.collectionName}/${id}`)
  }

  getUsersDoc$(id):Observable<any>{
    return this.getDocRef(id).get();
  }

  deleteItem(note:INote){
    let userDoc = this.getDocRef(note.id);
    userDoc.delete();
  }

  updateItem(note:INote): Promise<any>{
    let userDoc: AngularFirestoreDocument = this.getDocRef(note.id);
    return userDoc.update(note);
  }

  addNote(note:INote):Promise<any>{
    return this.notesCollection.add(note);
  }

}
