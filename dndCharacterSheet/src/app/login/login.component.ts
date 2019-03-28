import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthenticateService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.email, this.password).then(
      success => {
        console.log(success);
      }, error =>{
        console.log(error);
      }
      
    );
  }
  
}
