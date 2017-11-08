import { AlertController } from 'ionic-angular/es2015';
import { Injectable } from '@angular/core';



@Injectable()
export class AuthValidator{


    
    //Catching all the authentication error codes that firebase throws
    constructor(private alertCtrl : AlertController){

    }

    handleErrors(error){

        switch(error.code){
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
            this.presentAlert("Oh Nooo..!", "An unexpected error occurred")
        }
    }

    presentAlert(title : string, subtitle : string){
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['Dismiss']
        });
        alert.present()
    }
}