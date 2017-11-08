import { User } from '../../app/models/user.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public afAuth: AngularFireAuth, public afdb : AngularFireDatabase) {
  
  }

    /**
 * Takes an email and password and attempts to log in the user. It
 * returns a firebase promise of the type FirebaseAuthState.
 */
  signin(user : User){
    //return promise
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }


    /**
 * Signs up a user with the passed credentials in 
 * the firebase database. It returns a firebase promise of the type FirebaseAuthState.
 * It does not register the user in the database
 */
  signup(user : User){
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  /**
 * Registers the user and its associated data in the database.
 */
registerUser(user : User){
  
    this.afdb.object('/users/'+user.userId).update({
      email: user.email
    });
   
  }

  resetPassword(email : string){
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logout(){
    return this.afAuth.auth.signOut();
  }
}
