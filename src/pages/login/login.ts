import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { CadastroPage } from '../cadastro/cadastro';
import { AngularFireAuth } from 'angularfire2/auth';
import { ExibeProdutosPage } from '../exibe-produtos/exibe-produtos';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  title: string;
  form: FormGroup;
  
  @ViewChild('email') email;
  @ViewChild('password') senha;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fire: AngularFireAuth,
    private alertCtrl: AlertController
  ) {
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Aviso',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  cadastrarCliente() {
    this.navCtrl.push(CadastroPage);
  }

  acessar() {
    console.log(this.senha);
    this.fire.auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
      .then(data => {
        this.alert('Seja Bem Vindo!!!');
        this.navCtrl.push(ExibeProdutosPage);
      })
      .catch((error: any) => {
        if (error.code == 'auth/invalid-email') { this.alert('E-mail Inválido!'); }
        else if (error.code == 'auth/user-disabled') { this.alert(' Usuario Inválido!'); }
        else if (error.code == 'auth/user-not-found') { this.alert('Usuário nao cadastrado!'); }
        else if (error.code == 'auth/wrong-password') { this.alert('A senha inválida!'); }
      })
  }
}
