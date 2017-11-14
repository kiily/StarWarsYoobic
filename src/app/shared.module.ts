import { ComponentsModule } from '../components/components.module';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [

    ],
    imports: [
        IonicModule,
        ComponentsModule
    ],
    exports: [
        ComponentsModule
    ]
})
export class SharedModule{}