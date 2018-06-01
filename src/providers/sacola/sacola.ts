import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';


@Injectable()
export class SacolaProvider {

  constructor(
    private db: AngularFireDatabase,
    private st: AngularFireStorage) {
  }

  getProdutos() {
    let ref = this.db.list('produtos');
    return ref.snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    })
  }
}
