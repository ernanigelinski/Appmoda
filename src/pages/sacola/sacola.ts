import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { ExibeProdutosPage } from '../exibe-produtos/exibe-produtos';

@IonicPage()
@Component({
  selector: 'page-sacola',
  templateUrl: 'sacola.html',
})
export class SacolaPage {

  private sacola: Array<any> = [];
  produto = {
     foto: "",
     descricao: "",
     referencia: "",
     compdesc: "",
     preco: ""  
  }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private db: AngularFireDatabase,
    private st: AngularFireStorage
    ) {
      if(this.navParams.get('sacola') != null){
        this.sacola = this.navParams.get('sacola'); 
      }
      if(this.navParams.get('produto') != null){
        this.produto = this.navParams.get('produto'); 
        this.sacola.push(this.produto);
      }
    
      console.log(this.sacola);
  }

  ionViewWilload(){
   console.dir(this.produto);
  }

  continuar(){
    this.navCtrl.getPrevious().data.sacola = this.sacola
    this.navCtrl.pop();
  }

  finalizar(){

  }
}
