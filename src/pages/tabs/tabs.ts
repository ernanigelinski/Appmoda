import { Component } from '@angular/core';
import { ExibeProdutosPage } from '../exibe-produtos/exibe-produtos';
import { SacolaPage } from '../sacola/sacola';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ExibeProdutosPage;
  tab2Root = SacolaPage;

  constructor() {

  }
}
