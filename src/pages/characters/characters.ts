import { Character } from '../../app/models/characters.model';
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

  characters : Character[] = [new Character("Darth Revan", "https://fsmedia.imgix.net/10/4d/b3/55/1053/4d66/814d/281365270243/revan-1jpg.jpeg", `Revan—renowned as the Revanchist, honored as the Revan, reviled as Revan the Butcher, 
  dreaded as the Dark Lord of the Sith Darth Revan, and praised as the Prodigal Knight—was a Human male who played pivotal roles as both Jedi and Sith in the Mandalorian Wars, Jedi Civil War, and Great Galactic War.`)] 
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl : MenuController) {
    menuCtrl.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MissionsPage');
    console.log(this.navCtrl.getActive());
  }

}
