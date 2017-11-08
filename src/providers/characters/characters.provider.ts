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

  constructor(public afdb: AngularFireDatabase) {
   
  }

  getCharacters(){
    return this.afdb.list("/characters");
  }

  addToFavorites(character : Character){
    // console.log(character);
    return this.afdb.list("/users/favorites")
  }

}
