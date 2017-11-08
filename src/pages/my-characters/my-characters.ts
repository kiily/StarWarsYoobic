import { snapshotChanges } from 'angularfire2/database';
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
  public charactersProvider : CharactersProvider, public authProvider : AuthProvider) {
  }

  ionViewDidLoad() {
    

  // this.authProvider.getCurrentUID().subscribe( (authState) => {
  //   this.userId= authState.uid;
  //   console.log(this.userId);
  //   this.charactersProvider.getFavorites(this.userId).valueChanges()
  //   .subscribe( (favorites) => {
  //    console.log(favorites);
  //    for(let favorite of favorites){
  //      // let characterString = JSON.stringify(character);
 
  //      let transformedCharacter = new Character(favorite.name, favorite.imageUrl,
  //        favorite.description, favorite.detailedDescription, favorite.characterId);
  //      this.myCharacters.push(transformedCharacter);
 
  //    }
  //  });
  //  });
  //  console.log(this.userId);


   this.authProvider.getCurrentUID().subscribe( (authState) => {
    this.userId= authState.uid;
    console.log(this.userId);
    this.charactersProvider.getFavorites(this.userId).snapshotChanges()
    .subscribe( (changes) => {
    console.log(changes);

    for(let change of changes){
      this.charactersProvider.getCharacterById(Number(change.key)).valueChanges()
      .subscribe( (character) => {
        console.log(character);
        
        let favCharacter =  new Character(character.name, character.imageUrl, character.description, character.detailedDescription
        , character.characterId);

        this.favorites.push(favCharacter);
      })
    }
  })
  
   });
  
   
 
    
  }

}
