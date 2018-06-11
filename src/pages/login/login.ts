import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { CadastroPage } from '../cadastro/cadastro';
import { AngularFireAuth } from 'angularfire2/auth';
import { ExibeProdutosPage } from '../exibe-produtos/exibe-produtos';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  title: string;
  form: FormGroup;
  cliente: any;
  @ViewChild('cliente.email') email;
  @ViewChild('cliente.senha') password;

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
    this.fire.auth.signInWithEmailAndPassword(this.cliente.email, this.cliente.password)
      .then(data => {
        console.log('data', data);
        this.navCtrl.push(ExibeProdutosPage);
      })
      .catch((error: any) => {
        if (error.code == 'auth/invalid-email') { this.alert('E-mail Inválido!'); }
        else if (error.code == 'auth/user-disabled') { this.alert(' Usuario Inválido!'); }
        else if (error.code == 'auth/user-not-found') { this.alert('Usuário nao cadastrado!'); }
        else if (error.code == 'auth/wrong-password') { this.alert('A senha inválida!'); }
      })
  }

  logarComFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res => {
      this.alert('Seja Bem Vindo!!!');
      this.navCtrl.push(ExibeProdutosPage);
    })
    .catch((error: any) => {
      if (error.code == 'auth / account-exists-with-different-credential') {this.alert('E-mail já cadastrado para outro usuário!');}
      else if (error.code == 'auth / auth-domain-config-required') {this.alert(' Verifique o e-mail informado!');}
      else if (error.code == 'auth / cancelado popup-request') {this.alert('Excedeu o número de tentativas!');}
      else if (error.code == 'auth / operation-not-allowed') {this.alert('Tipo de conta não autorizada!');}
      else if (error.code == 'auth / operation-not-supported-in-this-environment') {this.alert('Operação não suportada pelo aplicativo!');}
      else if (error.code == 'auth / popup-blocked') {this.alert(' Login bloqueado pelo navgador!');}
      else if (error.code == 'auth / popup-closed-by-user') {this.alert('Login cancelado pelo usuario!');}
      else if (error.code == 'auth/wrong-password') {this.alert('A senha inválida!');}
    })
  }

  logarComGoogle(){
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(res => {
      this.alert('Seja Bem Vindo!!!');
      this.navCtrl.push(ExibeProdutosPage);
    })
    .catch((error: any) => {
      if (error.code == 'auth / account-exists-with-different-credential') {this.alert('E-mail já cadastrado para outro usuário!');}
      else if (error.code == 'auth / auth-domain-config-required') {this.alert(' Verifique o e-mail informado!');}
      else if (error.code == 'auth / cancelado popup-request') {this.alert('Excedeu o número de tentativas!');}
      else if (error.code == 'auth / operation-not-allowed') {this.alert('Tipo de conta não autorizada!');}
      else if (error.code == 'auth / operation-not-supported-in-this-environment') {this.alert('Operação não suportada pelo aplicativo!');}
      else if (error.code == 'auth / popup-blocked') {this.alert(' Login bloqueado pelo navgador!');}
      else if (error.code == 'auth / popup-closed-by-user') {this.alert('Login cancelado pelo usuario!');}
      else if (error.code == 'auth/wrong-password') {this.alert('A senha inválida!');}
    })
  }

  logarComTwitter(){
    this.fire.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
    .then(res => {
      this.alert('Seja Bem Vindo!!!');
      this.navCtrl.push(ExibeProdutosPage);
    })
    .catch((error: any) => {
      if (error.code == 'auth / account-exists-with-different-credential') {this.alert('E-mail já cadastrado para outro usuário!');}
      else if (error.code == 'auth / auth-domain-config-required') {this.alert(' Verifique o e-mail informado!');}
      else if (error.code == 'auth / cancelado popup-request') {this.alert('Excedeu o número de tentativas!');}
      else if (error.code == 'auth / operation-not-allowed') {this.alert('Tipo de conta não autorizada!');}
      else if (error.code == 'auth / operation-not-supported-in-this-environment') {this.alert('Operação não suportada pelo aplicativo!');}
      else if (error.code == 'auth / popup-blocked') {this.alert(' Login bloqueado pelo navgador!');}
      else if (error.code == 'auth / popup-closed-by-user') {this.alert('Login cancelado pelo usuario!');}
      else if (error.code == 'auth/wrong-password') {this.alert('A senha inválida!');}
    })
  }
}
