import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProdutosProvider } from '../../providers/produtos/produtos';



/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  [x: string]: any;
  title: string;
  formprod: FormGroup;
  produto: any;
  foto:'';
  constructor(
    public navCtrl: NavController,
    private toast: ToastController,
    public navParams: NavParams,
    private provider: ProdutosProvider,
    private formBuilder: FormBuilder) {
    this.produto = this.navParams.data.produtos || {};
    this.criaForm();
    this.setupPageTitle();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
  }

  private setupPageTitle() {
    this.title = this.navParams.data.produtos ? 'Alterando Produto' : 'Novo Produto'
  }

  criaForm() {
    this.formprod = this.formBuilder.group({
      key: [this.produto.key],
      descricao: [this.produto.descricao],
      referencia: [this.produto.referencia],
      preco: [this.produto.preco],
      compdesc: [this.produto.compdesc],
      categoria: [this.produto.categoria],
      quantidade: [this.produto.quantidade],
      foto: ['']
    })
  }

  salvarproduto() {
    if (this.formprod.valid) {
      this.provider.salvarproduto(this.formprod.value)
        .then(() => {
          this.toast.create({ message: 'Produto Salvo', duration: 3000 }).present();
          this.navCtrl.push(ProdutosPage);
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao Salvar Produto', duration: 3000 }).present();
          console.error(e);
        })
    }
  }

}
