import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import {CadastroProvider} from './../../providers/cadastro/cadastro';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CadastroPage } from '../cadastro/cadastro';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  


  constructor(
    public navCtrl: NavController){      
  }

  continuar(){
    this.navCtrl.push(CadastroPage);
  }

  

}
