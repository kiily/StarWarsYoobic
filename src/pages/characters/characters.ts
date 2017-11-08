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
  userId;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public charactersProvider : CharactersProvider, public authProvider : AuthProvider) {
    
  }

  ionViewDidLoad() {
   this.charactersProvider.getCharacters().valueChanges()
    .subscribe( (characters) => {
      console.log(characters);
      for(let character of characters){
        // let characterString = JSON.stringify(character);

        let transformedCharacter = new Character(character['name'], character['imageUrl'],
        character['description'], character['detailedDescription'], character['characterId']);
        this.characters.push(transformedCharacter);

      }
    });

    this.authProvider.getCurrentUID().subscribe( authState => {
      this.userId = authState.uid;
      console.log(this.userId);
    });

    

  }

  toDetailsPage(character : Character){
    this.navCtrl.push(DetailsPage, {
      character: character
    });
  }

  addToFavorites(character : Character){
    //check whether it is already favorite - change the ion-icon accordingly
    this.charactersProvider.getFavorites(this.userId).valueChanges()
    .subscribe( favorites => {
      //check whether character exists
      for(let char of favorites){
        if(char['characterId'] === character.characterId){
          //character exists
          console.log("error");
          return null;
        }
      }

      this.charactersProvider.addToFavorites(this.userId, character); 
      console.log("called");
      
    });
    
  }

 

}
