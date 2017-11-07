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

  constructor(public navCtrl: NavController) {
    
  }

  login(){
    
    let email = this.loginForm.controls.email.value;
    let password = this.loginForm.controls.password.value;

    let user = new User(email, password);
    console.log(user);
  }

}
