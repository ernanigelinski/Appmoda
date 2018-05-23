import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
  foto: any;

  constructor(
    public navCtrl: NavController,
    private toast: ToastController,
    public navParams: NavParams,
    private provider: ProdutosProvider,
    private camera: Camera,
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
      categoria: [this.produto.categoria]
    })
  }

  Foto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.foto = 'data:image/jpeg;base64,' + imageData;
     this.uploadInformation(this.foto);
    }, (err) => {
     // Handle error
    });
  }

  uploadInformation(text){
    let upload = this.dataProvider.uploadToStorage(text);
    upload.then().then(res => {
      this.dataProvider.storeInfoToDatabase(res.metadata).then(()=>{
        let toast = this.toastCtrl.create({
          message: 'New File Added!',
          duration: 3000
        });
        toast.present();
      });
    });
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
