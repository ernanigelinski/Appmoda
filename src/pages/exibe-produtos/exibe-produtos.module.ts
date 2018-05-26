import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExibeProdutosPage } from './exibe-produtos';

@NgModule({
  declarations: [
    ExibeProdutosPage,
  ],
  imports: [
    IonicPageModule.forChild(ExibeProdutosPage),
  ],
})
export class ExibeProdutosPageModule {}
