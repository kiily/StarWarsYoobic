import { CharactersPage } from './characters';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    CharactersPage,
  ],
  imports: [
    IonicPageModule.forChild(CharactersPage),
  ],
})
export class MissionsPageModule {}
