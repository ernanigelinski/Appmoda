import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ProdutosPage } from '../produtos/produtos';
import { LoginPage } from '../login/login';
import { ExibeProdutosPage } from '../exibe-produtos/exibe-produtos';
import { SacolaPage } from '../sacola/sacola';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ExibeProdutosPage;
  tab3Root = LoginPage;
  tab4Root = SacolaPage;

  constructor() {

  }
}
