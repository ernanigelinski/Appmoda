import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { ExibeProdutosPage } from '../exibe-produtos/exibe-produtos';
import { SacolaProvider } from '../../providers/sacola/sacola';
import { FormGroup, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-sacola',
  templateUrl: 'sacola.html',
})
export class SacolaPage {

  formsac: FormGroup;

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
    private st: AngularFireStorage,
    private provider: SacolaProvider,
    private toast: ToastController,
    private formBuilder: FormBuilder
  ) {
    if (this.navParams.get('sacola') != null) {
      this.sacola = this.navParams.get('sacola');
    }
    if (this.navParams.get('produto') != null) {
      this.produto = this.navParams.get('produto');
      this.sacola.push(this.produto);

    }

    console.log(this.sacola);
  }

  ionViewWilload() {
    console.dir(this.produto);
  }

  continuar() {
    this.navCtrl.getPrevious().data.sacola = this.sacola
    this.navCtrl.pop();
  }

  salvarSacola() {
    this.provider.salvarSacola(this.sacola)
      .then(() => {
        this.toast.create({ message: 'Sacola Salva', duration: 3000 }).present();
        this.navCtrl.push(ExibeProdutosPage);
      })
      .catch((e) => {
        this.toast.create({ message: 'Erro ao Salvar Sacola', duration: 3000 }).present();
        console.error(e);
      })
  }
}