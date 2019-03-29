import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';
import { SheetServiceService } from '../sheet-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthenticateService, 
    private router: Router
    ) { }

  ngOnInit() {
  }

  signup(){

    this.authService.signup(this.email, this.password).then(
      success => {
        console.log(success);
        this.router.navigate(['home']);
      }, error =>{
        console.log(error);
      }
      
    );
  }
  
}
