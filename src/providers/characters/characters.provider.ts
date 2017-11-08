import { Character } from './../../app/models/characters.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../../app/models/user.model';

/*
  Generated class for the CharactersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CharactersProvider {

  constructor(public afdb: AngularFireDatabase) {
   
  }

  getCharacters(){
    return this.afdb.list("/characters");
  }

  addToFavorites(userId, character : Character){
    // console.log(character);
    this.afdb.list("/users/"+userId+"/favorites").push(
      {
        characterId: character.characterId,
        name: character.name,
        imageUrl: character.imageUrl,
        description: character.description,
        detailedDescription: character.detailedDescription

      }
    )
  }

  getFavorites(userId){
    return this.afdb.list("/users/"+userId+"/favorites");
  }

  getCharacterById(characterId : number){
    return this.afdb.object('/characters/'+characterId)
  }

  removeFromFavorites(userId, characterId){
    return this.afdb.object('/users/'+userId+'/favorites/'+characterId);
  }
}
