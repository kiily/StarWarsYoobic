import { CharactersPage } from './../characters/characters';
import { AuthProvider } from '../../providers/auth/auth.provider';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { User } from '../../app/models/user.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  signupForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordRepeat: new FormControl('', Validators.required)
  });

  //allow toggle between login and sign up; true login; false sign up
  authToggle: boolean = true;


  constructor(public navCtrl: NavController, public authProvider: AuthProvider,
    public alertCtrl: AlertController) {

  }

  login() {

    let email = this.loginForm.controls.email.value;
    let password = this.loginForm.controls.password.value;

    let user = new User(email, password);

    this.authProvider.signin(user)
      .then(authState => {
        //store userId locally
        localStorage.setItem('userId', authState.uid);
        this.loginForm.reset();
        this.navCtrl.setRoot(CharactersPage);
      }).catch(error => {
        this.handleErrors(error);
      });
  }

  signup() {

    let email = this.signupForm.controls.email.value;
    let password = this.signupForm.controls.password.value;
    let passwordRepeat = this.signupForm.controls.passwordRepeat.value;

    if (!(password === passwordRepeat)) {
      //invalid
      //cannot signup
      this.presentAlert("Cannot Sign Up", "Passwords do not match!");
    } else {
      //valid

      let user = new User(email, password);
      this.authProvider.signup(user)
        .then(authState => {
          //extract the ID of the newly created user
          user.userId = authState.uid;
          //register the user in the db
          this.authProvider.registerUser(user);
          this.signupForm.reset();
          //return to the sign in view
          this.authToggle = !this.authToggle;
        }).catch(error => {
          //handle error
          console.log("here");
          console.log(error);
          this.handleErrors(error);
        });
    }



  }

  resetPassword(){
    console.log("reset");
    // this.authProvider.resetPassword().then( (response)){

    // }
  }
  toggleAuth() {
    this.authToggle = !this.authToggle;
  }

  handleErrors(error) {

    switch (error.code) {
      case "auth/invalid-email":
        this.presentAlert("Invalid Email", "Email is badly formatted. Please enter a valid email address.");
        break;

      case "auth/wrong-password":
        this.presentAlert("Invalid Password", "The password is invalid or the user does not have a password.");
        break;

      case "auth/user-not-found":
        this.presentAlert("User not Found", "There is no user record corresponding to this identifier.");
        break;

      case "auth/weak-password":
        this.presentAlert("Weak Password", "The password must be 6 characters long or more.");
        break;

      case "auth/email-already-in-use":
        this.presentAlert("Email Used", "The email address is already in use by another account.");
        break;

      default:
        this.presentAlert("Oh Nooo..!", "An unexpected error occurred");
    }
  }

  presentAlert(title: string, subtitle: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['Dismiss']
    });
    alert.present()
  }
}
