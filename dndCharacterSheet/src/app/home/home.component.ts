import { Component, OnInit } from '@angular/core';
import { SheetServiceService } from '../sheet-service.service';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sheets = [];

  constructor(
    private SheetServiceService: SheetServiceService,
    private authService: AuthenticateService,
    private router: Router
  ) { }

  ngOnInit() {
    this.SheetServiceService.getSheets(this.authService.getCurrentUser().uid).on(
      "value", resp=> {
        this.sheets = Object.values(resp.val());
      }
    );
  }
  newCharacter(){
    let user = this.authService.getCurrentUser().uid;
    this.SheetServiceService.newSheet(user).then(
      success => {
      console.log(success.key);
      this.router.navigate(['sheet/' + success.key]);
    }
    );
    
  }
  goToSheet(sheetid){
    let user = this.authService.getCurrentUser().uid;
    this.router.navigate(['sheet/' + sheetid]);
    
  }
}
