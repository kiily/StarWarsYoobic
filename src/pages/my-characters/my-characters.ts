import { AuthProvider } from './../../providers/auth/auth.provider';
import { CharactersProvider } from './../../providers/characters/characters.provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Character } from '../../app/models/characters.model';
import 'rxjs/add/operator/map';
/**
 * Generated class for the MyCharactersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-characters',
  templateUrl: 'my-characters.html',
})
export class MyCharactersPage {

  favorites : Character[]= [];
  userId;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public charactersProvider : CharactersProvider) {
  }

  ionViewDidLoad() {

  
    this.charactersProvider.getFavorites()
    .subscribe( (favorites) => {
     
    this.favorites = favorites;
      
  });
  
 
    
  }

}
