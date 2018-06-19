import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class SacolaProvider {

  private PATH = 'sacolas/';
  chave: string;

  constructor(
    private db: AngularFireDatabase,
    private st: AngularFireStorage,
    private fire: AngularFireAuth) {
      this.chave = this.fire.auth.currentUser.uid;
  }

  salvarSacola(sacola: any) {
    return new Promise((resolve, reject) => {
      if (sacola.key) {
        this.db.list(this.PATH)
          .update(sacola.key, { descricao: sacola.produto.descricao, referencia: sacola.produto.referencia, preco: sacola.produto.preco, compdesc: sacola.produto.compdesc, foto: sacola.produto.foto })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ descricao: sacola.produto.descricao, referencia: sacola.produto.referencia, preco: sacola.produto.preco, compdesc: sacola.produto.compdesc, foto: sacola.produto.foto })
          .push({chave: this.chave})
          .then(() => resolve());
      }
    });
  }

}
