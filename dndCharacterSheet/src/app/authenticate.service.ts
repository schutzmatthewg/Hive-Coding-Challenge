import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);

  }
  signup(email: string, password: string){
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
}
