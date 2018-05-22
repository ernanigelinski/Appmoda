import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ContactProvider } from '../../providers/contact/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  [x: string]: any;
  title: string;
  form: FormGroup;
  cliente: any;

  constructor(public navParams: NavParams,
    private toast: ToastController,
    private provider: ContactProvider,
    private formBuilder: FormBuilder) {
      this.cliente = this.navParams.data.contato || {};
      this.criaForm();
      this.setupPageTitle();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  private setupPageTitle(){
    this.title = this.navParams.data.clientes ? 'Alterando Cliente' : 'Novo Cliente'
  }

  criaForm(){
    this.form = this.formBuilder.group({
      key: [this.cliente.key],
      nome: [this.cliente.nome, Validators.required],
      cpf: [this.cliente.cpf, Validators.required],
      endereco: [this.cliente.endereco, Validators.required],
      numero: [this.cliente.numero, Validators.required],
      bairro: [this.cliente.bairro, Validators.required],
      telefone: [this.cliente.telefone, Validators.required],
      email: [this.cliente.email, Validators.required],
      senha: [this.cliente.senha, Validators.required]
    })
  }

  salvar(){
    if(this.form.valid){
      this.provider.salvar(this.form.value)
      .then(() => {
        this.toast.create({message: 'Cliente Salvo', duration: 3000}).present();
        this.navCtrl.push(HomePage);
      })
      .catch((e) => {
        this.toast.create({message: 'Erro ao Salvar Cliente Salvo', duration: 3000}).present();
        console.error(e);
      })
    }
  }
}
