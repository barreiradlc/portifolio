import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { User } from './../../models/user/user';
import { TabsPage } from '../tabs/tabs';
import { PerfilPage } from '../perfil/perfil';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  items:Observable<any[]>;  
  // user = {} as User;

  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    public navCtrl: NavController,
    private toast: ToastController,
    public navParams: NavParams) {
      this.items = afDatabase.list('perfil').valueChanges();
  }


  editarPerfil(){
    this.navCtrl.push(PerfilPage)
  }

}
