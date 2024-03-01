import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any

  constructor(private afAuth: AngularFireAuth) { }


  singIn = async (email: string, password: string) => {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.user = result.user
    } catch (error) {
      console.error(error);
    }
  }

  singUp = async (email: string, password: string) => {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.user = result.user
    } catch (error) {
      console.error(error);
    }
  }

  getUser = () => this.user;
}
