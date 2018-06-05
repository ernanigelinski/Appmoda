import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadastroProvider {

  private PATH = 'clientes/';

  constructor(private db: AngularFireDatabase) {
   
  }

  salvar(cliente: any){
    return new Promise((resolve, reject) => {
      if (cliente.key){
        this.db.list(this.PATH)
          .update(cliente.key, {nome: cliente.nome, endereco: cliente.endereco, numeroEnd: cliente.numeroEnd, bairro:cliente.bairro, telefone: cliente.telefone,  email: cliente.email, senha: cliente.senha})
          .then(() => resolve())
          .catch((e) => reject(e));
      }else{
        this.db.list(this.PATH)
        .push({nome: cliente.nome, endereco: cliente.endereco, numeroEnd: cliente.numeroEnd, bairro:cliente.bairro, telefone: cliente.telefone, email: cliente.email, senha: cliente.senha})
        .then(() => resolve());  
      }
    });
  }
}
