import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { SacolaPage } from '../sacola/sacola';


@IonicPage()
@Component({
  selector: 'page-exibe-produtos',
  templateUrl: 'exibe-produtos.html',
})
export class ExibeProdutosPage {

  produtos: Observable<any>;
  private sacola: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provider: ProdutosProvider,
    private toast: ToastController) {
    this.produtos = this.provider.buscarTodos();
  }

  
  selecionaProduto(produto) {
    this.navCtrl.push(SacolaPage, {produto: produto, sacola: this.sacola});

    }

  ionViewWillEnter(){
    this.sacola = this.navParams.get("sacola");
    console.log(this.sacola);
  }
}