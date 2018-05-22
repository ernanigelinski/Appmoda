import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactProvider {

  private PATH = 'clientes/';

  constructor(private db: AngularFireDatabase) {
    console.log('Hello ContactProvider Provider');
  }

  salvar(cliente: any){
    return new Promise((resolve, reject) => {
      if (cliente.key){
        this.db.list(this.PATH)
          .update(cliente.key, {cpf: cliente.cpf, nome: cliente.nome})
          .then(() => resolve())
          .catch((e) => reject(e));
      }else{
        this.db.list(this.PATH)
        .push({nome: cliente.nome, cpf: cliente.cpf})
        .then(() => resolve());  
      }
    });
  }
}
