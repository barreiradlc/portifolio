import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from './../../models/user/user';
// import { Perfil } from '../../models/perfil';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  perfil = {} as User;

  constructor(  private afAuth: AngularFireAuth,
                private afDatabase: AngularFireDatabase,
                public navCtrl: NavController, 
                public navParams: NavParams) {
  }


  confirmaPerfil(){
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`perfil/${auth.uid}`).set(this.perfil)
        .then(() => this.navCtrl.setRoot(TabsPage));
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
