import { CharactersProvider } from '../../providers/characters/characters.provider';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../app/models/characters.model';

/**
 * Generated class for the CharacterCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'character-card',
  templateUrl: 'character-card.html'
})
export class CharacterCardComponent {

  @Input() characters : Character[];
  @Input() userId : string;
  @Output('change') change = new EventEmitter();

  constructor(private charactersProvider : CharactersProvider) {

  }

  seeDetails(char : Character){
    this.change.emit(char);
    console.log(char);
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
