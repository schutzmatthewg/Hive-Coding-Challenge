import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';
import { SheetServiceService } from '../sheet-service.service';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {
  vals: sheetVals;
  user: string;
  sheetid: string;

  constructor(
    private authService: AuthenticateService,
    private route: ActivatedRoute,
    private sheetService: SheetServiceService
  ) { }

  ngOnInit() {
    //assign the user and sheetid for other method use
    //set the vals variable equal to the database at user/sheet

    this.user = this.authService.getCurrentUser().uid;
    this.sheetid = this.route.snapshot.url[1].path;
    //backup just in case firebase doesnt work
    this.sheetService.getSheet(this.user, this.sheetid).on("value", resp => {
      this.vals = resp.val();
    })
    if (this.vals == null) {
      this.vals = this.defaultVals();
    }

  }
  saveData() {
    this.sheetService.edit(this.user, this.route.snapshot.url[1], this.vals).then(
      success => {
        console.log(success);
      }
    )
  }
  defaultVals() {
    //basic info
    let vals: sheetVals = {

      charName: "",

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
