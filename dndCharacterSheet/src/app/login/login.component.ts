import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthenticateService, private router: Router) {
    
  }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.email, this.password).then(
      success => {
        console.log(success);
        this.router.navigate(['home']);
      }, error =>{
        console.log(error);
      }
      
    );
  }
  
}
