import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {
  vals: sheetVals;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.snapshot.url[1].path;

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
  gold: number,
  electrum: number,
  platinum: number,
  

  attacks: string,
  equipment: string,
  feats: string
  


}