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

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public charactersProvider : CharactersProvider) {
    
  }

  ionViewDidLoad() {
   this.charactersProvider.getCharacters().valueChanges()
    .subscribe( (characters) => {
      console.log(characters);
      for(let character of characters){
        let transformedCharacter = new Character(character.name, character.imageUrl,
        character.description, character.detailedDescription, character.characterId);
        this.characters.push(transformedCharacter);

      }
    });

    this.charactersProvider.getFavorites().valueChanges()
    .subscribe((favorites) => {
      console.log(favorites);
    })
  }

  toDetailsPage(character : Character){
    this.navCtrl.push(DetailsPage, {
      character: character
    });
  }

  addToFavorites(character : Character){
    this.charactersProvider.addToFavorites(character)
    .valueChanges().subscribe( (favorites) => {
      console.log(favorites);
      return favorites;
    });

  }

 

}
