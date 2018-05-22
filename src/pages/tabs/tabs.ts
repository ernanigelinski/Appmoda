import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProdutosPage } from '../produtos/produtos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProdutosPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
