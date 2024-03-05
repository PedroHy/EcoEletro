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
      localStorage.setItem("user", this.user.uid);
    } catch (error) {
      console.error(error);
    }
  }

  singUp = async (email: string, password: string) => {
    try {
      const result = await createUserWithEmailAndPassword(this.auth, email, password);
      this.user = result.user
      localStorage.setItem("user", this.user.uid);
      return(this.user.uid)
    } catch (error) {
      console.error(error);
    }
  }

  getUser = () => {
    const uid = localStorage.getItem("user")
    return uid ? true : false
  };

  signOut = ()=>{
    localStorage.setItem("user", '');
  }
}
