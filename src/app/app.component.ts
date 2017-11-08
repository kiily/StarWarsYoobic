import { CharactersPage } from './../pages/characters/characters';
import { MyCharactersPage } from './../pages/my-characters/my-characters';
import { HomePage } from './../pages/home/home';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: NavController // <--- Reference to the Nav
  
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  signout(){
    this.nav.setRoot(HomePage);
  }

  goToMyCharactersPage(){
    this.nav.setRoot(MyCharactersPage);
  }

  goToCharactersPage(){
    this.nav.setRoot(CharactersPage);
  }

}

