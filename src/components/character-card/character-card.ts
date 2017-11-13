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
  @Input() favorites : boolean = false;
  @Input() userId : string;
  @Output('change') change = new EventEmitter();

  constructor(private charactersProvider : CharactersProvider) {
    
  }

  ionViewDidLoad(){
    if(!(this.characters.length >0 )){
      this.charactersProvider.getCharacters().subscribe( characters => {
        this.characters = characters;
      });
    }
  }

  seeDetails(char : Character){
    this.change.emit(char);
  }

  
  addToFavorites(character : Character){
    //check whether it is already favorite - change the ion-icon accordingly
    this.charactersProvider.getFavorites()
    .subscribe( favorites => {
      //check whether character exists
      console.log("favorites");
      console.log(favorites);
    let isFavorite = this.charactersProvider.isFavorite(character);
   if(isFavorite){
    this.charactersProvider.addToFavorites(this.userId, character); 
    console.log("gere");
   }else{
     //already favorite
     console.log("already favorite")
   }
     
      
    });
    
  }


  removeFromFavorites(char : Character){
    this.charactersProvider.removeFromFavorites(this.userId, char.characterId)
  }

  
}
