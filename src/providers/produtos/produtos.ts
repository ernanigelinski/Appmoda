import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
/*
  Generated class for the ProdutosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutosProvider {

  private PATH = 'produtos/';

  constructor(
    private db: AngularFireDatabase,
    private st: AngularFireStorage) {
    console.log('Hello ProdutosProvider Provider');
  }

  

  salvarproduto(produto: any) {
    return new Promise((resolve, reject) => {
      if (produto.key) {
        this.db.list(this.PATH)
          .update(produto.key, { descricao: produto.descricao, referencia: produto.referencia, preco: produto.preco, compdesc: produto.compdesc, categoria: produto.categoria, quantidade: produto.quantidade, foto: produto.foto })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ descricao: produto.descricao, referencia: produto.referencia, preco: produto.preco, compdesc: produto.compdesc, categoria: produto.categoria, quantidade: produto.quantidade, foto: produto.foto })
          .then(() => resolve());
      }
    });
  }
}
