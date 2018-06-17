import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';


@Injectable()
export class ProdutosProvider {

  private PATH = 'produtos/';

  constructor(
    private db: AngularFireDatabase,
    private st: AngularFireStorage) {
    
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

  buscarTodos(){
    return this.db.list(this.PATH)
    .snapshotChanges()
    .map(Changes => {
      return Changes.map(c =>({
        key: c.key, ...c.payload.val()}));
      })
    }
}
