import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {
  vals: sheetVals;

  constructor(
    private authService: AuthenticateService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.snapshot.url[1].path;

  }
  saveData(){
    
  }

}
//interface for all the values in the database
interface sheetVals{
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