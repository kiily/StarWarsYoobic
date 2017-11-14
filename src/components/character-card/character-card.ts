import { CharactersProvider } from '../../providers/characters/characters.provider';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class CharacterCardComponent implements OnInit {

  @Input() characters : Character[];
  @Input() isFavorite : boolean = false;
  //NOt necessary if fetched from local storage; change this in another iteration
  @Input() userId : string;
  @Output('change') change = new EventEmitter();

  
  favorites : Character[]
  constructor(private charactersProvider : CharactersProvider) {
  
  }

ngOnInit(){
   //If the favorites array is not set; i.e. the user is in the Characters page;
    //then get the favorites to be able to pass them for comparison to check whether they exist or not
    if(this.favorites ==  null){
      this.charactersProvider.getFavorites().subscribe( favorites => {
        this.favorites = favorites;
      });
    }

  
}


  //Emit the change that occurs when the user presses the details button
  seeDetails(char : Character){
    this.change.emit(char);
  }

  
  //Add a character to the favorites list
  addToFavorites(character : Character){
    console.log(character);
    
   if(!this.charactersProvider.isFavorite(character, this.favorites)){
    
    this.charactersProvider.addToFavorites(this.userId, character); 
    console.log("added");
   
   }else{
     //already favorite
     console.log("already favorite")
   }   
  }


  removeFromFavorites(char : Character){
    this.charactersProvider.removeFromFavorites(this.userId, char.characterId)
  }

  
}
