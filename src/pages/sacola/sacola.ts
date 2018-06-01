import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { SacolaProvider } from '../../providers/sacola/sacola';

/**
 * Generated class for the SacolaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sacola',
  templateUrl: 'sacola.html',
})
export class SacolaPage {

  produtos: Observable<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private sacola: SacolaProvider,
    private toastCtrl: ToastController) {
      this.produtos = this.sacola.getProdutos();
  }

  selecionaProduto(){
    
  }

}
