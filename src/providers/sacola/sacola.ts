import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class SacolaProvider {

  private PATH = 'sacolas/';
  chave: string;

  constructor(
    private db: AngularFireDatabase,
    private st: AngularFireStorage,
    private fire: AngularFireAuth,
    ) {
    this.chave = this.fire.auth.currentUser.uid;
  }

  salvarSacola(sacola: any) {
    console.log(sacola);
    return new Promise((resolve, reject) => {
      this.db.list(this.PATH)
        .push({ sacola: sacola })
        .push({ chave: this.chave })
        .then(() => resolve());
    });

  }

}
