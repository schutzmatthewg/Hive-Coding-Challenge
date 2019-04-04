import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SheetServiceService {

  constructor() { }

  newSheet(user){
    return firebase.database().ref('/users/' + user).push('');
  }
  delete(user, sheetid){
    return firebase.database().ref('users/'+ user + '/' + sheetid).remove();
  }
  edit(user, sheetid, data){
    return firebase.database().ref('users/'+ user + '/' + sheetid).set(data);
  }
  getSheets(user){
    return firebase.database().ref('users/'+ user);
  }
  getSheet(user, sheetid){
    return firebase.database().ref('users/' + user + '/' + sheetid);
  }
}
