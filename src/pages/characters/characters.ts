import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MissionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html',
})
export class CharactersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl : MenuController) {
    menuCtrl.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MissionsPage');
    console.log(this.navCtrl.getActive());
  }

}
