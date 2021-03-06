import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastroProvider} from '../providers/cadastro/cadastro';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { LoginPage } from '../pages/login/login';
import { ProdutosPage } from '../pages/produtos/produtos';
import { ProdutosProvider } from '../providers/produtos/produtos';
import { ExibeProdutosPage } from '../pages/exibe-produtos/exibe-produtos';
import { SacolaPage } from '../pages/sacola/sacola';
import { SacolaProvider } from '../providers/sacola/sacola';
import { LoginProvider } from '../providers/login/login';
import { EmailComposer } from '@ionic-native/email-composer';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    CadastroPage,
    LoginPage,
    ProdutosPage,
    ExibeProdutosPage,
    SacolaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA19DL43LPJCd4_0l9kvYb0c-J45xdR3Rw",
        authDomain: "appmoda-c73e9.firebaseapp.com",
        databaseURL: "https://appmoda-c73e9.firebaseio.com",
        projectId: "appmoda-c73e9",
        storageBucket: "",
        messagingSenderId: "1071276916284"
    }),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    CadastroPage,
    LoginPage,
    ProdutosPage,
    ExibeProdutosPage,
    SacolaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CadastroProvider,
    ProdutosProvider,
    SacolaProvider,
    LoginProvider,
    EmailComposer
  ]
})
export class AppModule {}
