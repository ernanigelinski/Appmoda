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

  getImages() {
    let ref = this.db.list('images');
    return ref.snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    })
  }

  uploadToStorage(information): AngularFireUploadTask {
    let nome = '${new Date().getTime()}.jpg';
    return this.st.ref('images/$(nome)').putString(information, 'data_url');
  }

  storeInfoToDatabase(metainfo) {
    let toSave = {
      created: metainfo.timeCreated,
      url: metainfo.downloadUrls[0],
      fullPath: metainfo.fullPath,
      contentType: metainfo.contentType
    }
    return this.db.list('images').push(toSave);
  }

  salvarproduto(produto: any) {
    return new Promise((resolve, reject) => {
      if (produto.key) {
        this.db.list(this.PATH)
          .update(produto.key, { descricao: produto.descricao, referencia: produto.referencia, preco: produto.preco, compdesc: produto.compdesc, categoria: produto.categoria })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ descricao: produto.descricao, referencia: produto.referencia, preco: produto.preco, compdesc: produto.compdesc, categoria: produto.categoria })
          .then(() => resolve());
      }
    });
  }
}
