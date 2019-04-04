import { Component, OnInit } from '@angular/core';
import { SheetServiceService } from '../sheet-service.service';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';
import { SheetComponent } from '../sheet/sheet.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sheets = [];
  sheetidArr = [];
  sheet: sheetVals;
  initialName: string;

  constructor(
    private SheetServiceService: SheetServiceService,
    private authService: AuthenticateService,
    private router: Router
  ) { }

  ngOnInit() {
    this.SheetServiceService.getSheets(this.authService.getCurrentUser().uid).on(
      "value", resp => {
        this.sheets = Object.values(resp.val());
        this.sheetidArr = Object.keys(resp.val());
      }
    );
  }
  newCharacter() {
    this.sheet = this.defaultVals(this.initialName);
    let user = this.authService.getCurrentUser().uid;
    this.SheetServiceService.newSheet(user).then(
      success => {
        this.SheetServiceService.edit(user, success.key, this.sheet);
        this.router.navigate(['sheet/' + success.key]);
        
      }
    );

  }
  goToSheet(sheetid) {
    let user = this.authService.getCurrentUser().uid;
    this.router.navigate(['sheet/' + sheetid]);

  }

  defaultVals(name) {
    //basic info
    let vals: sheetVals = {

      charName: name,

      class: "",
      race: "",
      alignment: "",
      background: "",
      experience: 0,
      playerName: "",
      level: 0,

      //attributes
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,

      //modifiers
      strMod: 0,
      dexMod: 0,
      conMod: 0,
      wisMod: 0,
      chaMod: 0,

      //saving throws array
      savingThrows: [
        false,
        false,
        false,
        false,
        false,
        false
      ],

      //bonuses
      inspiration: 0,
      proficiency: 0,

      //skills
      acrobatics: 0,
      animalHandling: 0,
      arcana: 0,
      athletics: 0,
      deception: 0,
      history: 0,
      insight: 0,
      intimidation: 0,
      investigation: 0,
      medicine: 0,
      nature: 0,
      perception: 0,
      performance: 0,
      persuasion: 0,
      religion: 0,
      sleightOfHand: 0,
      stealth: 0,
      survival: 0,

      //skills proficiency array
      skillsProficiency: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],

      passiveWis: 0,

      //defense stats
      ac: 0,
      initiative: 0,
      speed: 0,
      curHp: 0,
      tempHp: 0,
      maxHp: 0,
      hitDice: 0,

      //traits
      personality: "",
      ideals: "",
      bonds: "",
      flaws: "",

      //money
      copper: 0,
      silver: 0,
      electrum: 0,
      gold: 0,
      platinum: 0,


      attacks: "",
      equipment: "",
      feats: "",
    }
    return vals;
  }
}
//interface for all the values in the database
interface sheetVals {
  //basic info
  charName: string,

  class: string,
  race: string,
  alignment: string,
  background: string,
  experience: number,
  playerName: string;
  level: number,

  //attributes
  strength: number,
  dexterity: number,
  constitution: number,
  intelligence: number,
  wisdom: number,
  charisma: number,

  //modifiers
  strMod: number,
  dexMod: number,
  conMod: number,
  wisMod: number,
  chaMod: number,

  //saving throws array
  savingThrows: boolean[],

  //bonuses
  inspiration: number,
  proficiency: number,

  //skills
  acrobatics: number,
  animalHandling: number,
  arcana: number,
  athletics: number,
  deception: number,
  history: number,
  insight: number,
  intimidation: number,
  investigation: number,
  medicine: number,
  nature: number,
  perception: number,
  performance: number,
  persuasion: number,
  religion: number,
  sleightOfHand: number,
  stealth: number,
  survival: number,

  //skills proficiency array
  skillsProficiency: boolean[],

  passiveWis: number,

  //defense stats
  ac: number,
  initiative: number,
  speed: number,
  curHp: number,
  tempHp: number,
  maxHp: number,
  hitDice: number,

  //traits
  personality: string,
  ideals: string,
  bonds: string,
  flaws: string,

  //money
  copper: number,
  silver: number,
  electrum: number,
  gold: number,
  platinum: number,


  attacks: string,
  equipment: string,
  feats: string



}
