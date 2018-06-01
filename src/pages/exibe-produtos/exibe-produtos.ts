import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { SacolaPage } from '../sacola/sacola';

/**
 * Generated class for the ExibeProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exibe-produtos',
  templateUrl: 'exibe-produtos.html',
})
export class ExibeProdutosPage {

  produtos: Observable<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provider: ProdutosProvider,
    private toast: ToastController) {
      this.produtos = this.provider.buscarTodos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExibeProdutosPage');
  }

  selecionaProduto(){
    this.navCtrl.push(SacolaPage);
  }
}
