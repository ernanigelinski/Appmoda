import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class CadastroProvider {

  private PATH = 'clientes/';
  chave: string;

  constructor(
    private db: AngularFireDatabase,
    private fire: AngularFireAuth) {
      this.chave = this.fire.auth.currentUser.uid;
   
  }

  buscarTodos(){ 
    return this.db.list(this.PATH, ref => ref.orderByChild('chave').equalTo(this.chave))
         .snapshotChanges()
         .map(changes => {
           return changes.map(c => ({key: c.payload.key, ...c.payload.val()
           }));
         })
      }

      buscar(key: string){
        return this.db.object(this.PATH + key)
          .snapshotChanges()
          .map(c => {
            return {key: c.key, ...c.payload.val()};
          })
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
        .push({nome: cliente.nome, endereco: cliente.endereco, numeroEnd: cliente.numeroEnd, bairro:cliente.bairro, telefone: cliente.telefone, email: cliente.email, senha: cliente.senha, chave: cliente.chave})
        .then(() => resolve());  
      }
    });
  }
}
