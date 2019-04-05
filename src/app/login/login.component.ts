import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  currUser: string;
  errMsg: string;

  constructor(private authService: AuthenticateService, private router: Router) {
    
  }

  ngOnInit() {
    //resets the error message so that it goes away on refresh
    this.errMsg = "";
  }

  login(){
    this.authService.login(this.email, this.password).then(
      success => {
        console.log(success);
        this.router.navigate(['home']);
      }, error =>{
        console.log(error);
        this.errMsg = "Invalid username or password!"
      }
      
    );
  }
  
}
