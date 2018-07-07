import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { SacolaProvider } from '../../providers/sacola/sacola';
import { FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-sacola',
  templateUrl: 'sacola.html',
})
export class SacolaPage {
  [x: string]: any;
  title: string;
  formsac: FormGroup;

  private sacola: Array<any> = [];
  produto = {
    foto: "",
    descricao: "",
    referencia: "",
    compdesc: "",
    preco: ""
  }
  Platform: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provider: SacolaProvider,
    private toast: ToastController,
    private alertCtrl: AlertController,
  ) {
    if (this.navParams.get('sacola') != null) {
      this.sacola = this.navParams.get('sacola');
    }
    if (this.navParams.get('produto') != null) {
      this.produto = this.navParams.get('produto');
      this.sacola.push(this.produto);
    }

  }

  ionViewWilload() {
    console.dir(this.produto);
  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Aviso',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  continuar() {
    this.navCtrl.getPrevious().data.sacola = this.sacola
    this.navCtrl.pop();
  }

  salvarSacola() {
    this.provider.salvarSacola(this.sacola)
      .then(() => {
        this.alert('Seu pedido foi salvo! Logo entrarei em contato para entregar!!!');
      })
      .catch((e) => {
        this.toast.create({ message: 'Erro ao Salvar Sacola', duration: 3000 }).present();
        console.error(e);
      })
  }

}
