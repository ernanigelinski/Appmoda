import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, ToastController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { CadastroProvider } from '../../providers/cadastro/cadastro';


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  [x: string]: any;
  title: string;
  formCliente: FormGroup;
  cliente: any;
  @ViewChild('email') email;
  @ViewChild('password') senha;

  constructor(public navParams: NavParams,
    private toast: ToastController,
    private provider: CadastroProvider,
    private fire: AngularFireAuth,
    private alertCtrl: AlertController,
    private formBuilder: FormBuilder) {
    this.cliente = this.navParams.data.contato || {};
    this.criaForm();
    this.setupPageTitle();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
/*
  registrarcliente() {
    this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(data => {
        this.alert('Cadastro efetuado com sucesso!!!');
        this.navCtrl.push(LoginPage);
      })
      .catch((error: any) => {
        if (error.code == 'auth/email-already-in-use') { this.alert('E-mail já Cadastrado!'); }
        else if (error.code == 'auth/invalid-email') { this.alert(' E-mail Invalido!'); }
        else if (error.code == 'auth/operation-not-allowed') { this.alert('A conta precisa ser ativada!'); }
        else if (error.code == 'auth/weak-password') { this.alert('A senha é muito fraca!'); }
      })
}
*/

  private setupPageTitle() {
    this.title = this.navParams.data.clientes ? 'Alterando Cliente' : 'Novo Cliente'
  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Aviso',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  
  criaForm() {
      this.formCliente = this.formBuilder.group({
      key: [this.cliente.key],
      nome: [this.cliente.nome, Validators.required],
      endereco: [this.cliente.endereco, Validators.required],
      numeroEnd: [this.cliente.numeroEnd, Validators.required],
      bairro: [this.cliente.bairro, Validators.required],
      telefone: [this.cliente.telefone, Validators.required],
      email: [this.cliente.email, Validators.required],
      senha: [this.cliente.senha, Validators.required]
    })
  }

  salvar() {
    if (this.formCliente.valid) {
      this.provider.salvar(this.formCliente.value)
        .then(() => {
          this.navCtrl.push(LoginPage);
          this.toast.create({ message: 'Cliente Salvo', duration: 3000 }).present();
          
        })
        .catch((e) => {
          
        })
    }
  }
}
