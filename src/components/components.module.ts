import { IonicPageModule } from 'ionic-angular/umd/module';
import { IonicModule } from 'ionic-angular/umd';
import { NgModule } from '@angular/core';
import { CharacterCardComponent } from './character-card/character-card';

export const components = [
	CharacterCardComponent
];

//NOT IN USE
@NgModule({
	declarations: [components],
	imports: [IonicModule, IonicPageModule.forChild(CharacterCardComponent)],
	exports: [components]
})
export class ComponentsModule {}
