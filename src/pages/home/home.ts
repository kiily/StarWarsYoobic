import { AuthValidator } from '../../providers/auth/auth.validator';
import { CharactersPage } from './../characters/characters';
import { AuthProvider } from '../../providers/auth/auth.provider';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../app/models/user.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loginForm : FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  signupForm : FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordRepeat: new FormControl('', Validators.required)
  });

  //allow toggle between login and sign up; true login; false sign up
  authToggle : boolean = true;
  rootPage:any = HomePage;
  
  constructor(public navCtrl: NavController, public authProvider : AuthProvider,
  public authValidator : AuthValidator) {
    
  }

  login(){
    
    let email = this.loginForm.controls.email.value;
    let password = this.loginForm.controls.password.value;

    let user = new User(email, password);
    console.log(user);
    this.navCtrl.setRoot(CharactersPage);
  }

  signup(){

    let email = this.signupForm.controls.email.value;
    let password = this.signupForm.controls.password.value;
    let passwordRepeat = this.signupForm.controls.passwordRepeat.value;

    if(password == passwordRepeat){
      //valid
      let user = new User(email, password);
      this.authProvider.signup(user)
      .then( authState => {
        //extract the ID of the newly created user
        user.userId = authState.uid;
        //register the user in the db
        this.authProvider.registerUser(user);
        this.signupForm.reset();
        this.navCtrl.setRoot(CharactersPage);
      }).catch(error => {
        //handle error
        console.log(error);
        this.authValidator.handleErrors(error);
      });
    }

    //cannot signup
  
  }

  toggleAuth(){
    this.authToggle = !this.authToggle;
  }
}
