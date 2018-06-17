import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';


@Injectable()
export class LoginProvider {

  private PATH = 'clientes/';

  constructor(
    private db: AngularFireDatabase,
    private st: AngularFireStorage) {
  }

  buscarTodos(){
    return this.db.list(this.PATH)
    .snapshotChanges()
    .map(Changes => {
      return Changes.map(c =>({
        key: c.key, ...c.payload.val()}));
      })
    }
}
