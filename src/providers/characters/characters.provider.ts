import { AuthProvider } from '../auth/auth.provider';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Character } from './../../app/models/characters.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CharactersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CharactersProvider {

  charactersRef: AngularFireList<Character>;
  favoritesRef: AngularFireList<Character>;

  favorites: Observable<Character[]>;
  characters: Observable<Character[]>;

  //track the current user
  userId: string;
  constructor(public afdb: AngularFireDatabase, private authProvider: AuthProvider) {

    this.userId = localStorage.getItem('userId');
    this.favoritesRef = this.afdb.list("/users/" + this.userId + "/favorites");


    this.favorites = this.favoritesRef.snapshotChanges()
      .map(changes => {
        return changes.map(c => {
          let key = c.payload.key;
          let favChar = c.payload.val();
          return favChar;
        });
      });

    this.charactersRef = afdb.list('/characters');



    //use snapshot changes to also extract and store the key
    this.characters = this.charactersRef.snapshotChanges()
      .map(changes => {
        return changes.map(
          c => {
            let key = c.payload.key;
            let char = c.payload.val();
            return char;
          }
        )
      });


  }

  getCharacters() {
    return this.characters;
  }


  addToFavorites(userId, character: Character) {

    this.favoritesRef.push({
      characterId: character.characterId,
      name: character.name,
      imageUrl: character.imageUrl,
      description: character.description,
      detailedDescription: character.detailedDescription

    });

  }

  getFavorites() {
    return this.favorites;

  }

  getCharacterById(characterId: number) {
    return this.afdb.object('/characters/' + characterId)
  }

  removeFromFavorites(userId, characterId) {
    return this.afdb.object('/users/' + userId + '/favorites/' + characterId);
  }

  isFavorite(character: Character, favorites: Character[]) {

    for(let favorite of favorites){
      if(favorite.characterId == character.characterId){
        //already favorite
        console.log("already");
        return true;
      }
    }
    //if the character is not in favorites
    return false;

  }

}
