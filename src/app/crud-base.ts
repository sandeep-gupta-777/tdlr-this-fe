import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {CollectionReference, DocumentChangeAction} from '@angular/fire/firestore/interfaces';
import {IUser} from '../interfaces/user';
import {User} from 'firebase';
import {INote} from '../interfaces/note';
import {EFireBaseCollections} from './notes-crud.service';
// import Firestore = firebase.firestore.Firestore;

export class CrudBase {
  public itemsCollection: AngularFirestoreCollection<INote>;
  public angularFirestore: AngularFirestore;

  constructor() {
  }

  collectionName: string;

  init(angularFirestore: AngularFirestore, collectionName: string) {
    this.angularFirestore = angularFirestore;
    this.collectionName = collectionName;
    this.itemsCollection = this.angularFirestore.collection(EFireBaseCollections.notes);
  }

  getDocRef(id) {
    return this.angularFirestore.doc(`${this.collectionName}/${id}`);
  }

  getUsersDoc$(id): Observable<any> {
    return this.getDocRef(id).get();
  }

  deleteItem(note: INote) {
    let userDoc = this.getDocRef(note.id);
    userDoc.delete();
  }

  updateItem(note: INote): Promise<any> {
    let userDoc: AngularFirestoreDocument = this.getDocRef(note.id);
    return userDoc.update(note);
  }

  addNote(note: INote): Promise<any> {
    return this.itemsCollection.add(note);
  }

}
