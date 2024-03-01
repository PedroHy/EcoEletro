import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any

  constructor(private auth: Auth) { }

  singIn = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(this.auth, email, password);
      this.user = result.user
    } catch (error) {
      console.error(error);
    }
  }

  singUp = async (email: string, password: string) => {
    try {
      const result = await createUserWithEmailAndPassword(this.auth, email, password);
      this.user = result.user
    } catch (error) {
      console.error(error);
    }
  }

  getUser = () => this.user;
}
