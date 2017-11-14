import { AuthProvider } from './../../providers/auth/auth.provider';
import { CharactersProvider } from '../../providers/characters/characters.provider';
import { DetailsPage } from '../details/details';
import { Character } from '../../app/models/characters.model';
import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

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

  characters : Character[]= [];
  userId : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public charactersProvider : CharactersProvider, public authProvider : AuthProvider) {
    
  }

  ionViewDidLoad() {
   this.charactersProvider.getCharacters()
       .subscribe( (characters) => {
         this.characters = characters;
         console.log(this.characters);
    });

    this.authProvider.getCurrentUID().subscribe( authState => {
      this.userId = authState.uid;
    });

  }

  toDetailsPage(char : Character){
    this.navCtrl.push(DetailsPage, {
      character: char
    });
  }


 

}
