import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DetailsPage } from './../pages/details/details';
import { CharactersPage } from './../pages/characters/characters';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { firebaseConfig } from '../environment';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth.provider';
import { CharactersProvider } from '../providers/characters/characters.provider';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CharactersPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CharactersPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    CharactersProvider
  ]
})
export class AppModule {}
