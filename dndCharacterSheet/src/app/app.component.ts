import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD9MFUrCbyY__gmt4t6iCEi6x9_nUk5LUQ",
  authDomain: "hivecodingchallenge.firebaseapp.com",
  databaseURL: "https://hivecodingchallenge.firebaseio.com",
  projectId: "hivecodingchallenge",
  storageBucket: "hivecodingchallenge.appspot.com",
  messagingSenderId: "471313138543"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dndCharacterSheet';
  constructor() {
    firebase.initializeApp(config);

  }
}
