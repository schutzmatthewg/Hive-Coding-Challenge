import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthenticateService) { }

  ngOnInit() {
  }

  signup(){
    this.authService.signup(this.email, this.password);
  }
}
