import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCharactersPage } from './my-characters';

@NgModule({
  declarations: [
    MyCharactersPage,
  ],
  imports: [
    IonicPageModule.forChild(MyCharactersPage),
  ]
  
})
export class MyCharactersPageModule {}
