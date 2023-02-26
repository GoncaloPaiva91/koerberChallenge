import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesPage } from '../services/services';

interface IAuth {
  username: string;
  password: string;
};
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss']
})
export class LoginPageComponent implements OnInit{
 public loginForm: FormGroup;
 public isValid: boolean = false;

 constructor(private authService: ServicesPage, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  authLogin(value: IAuth, valid: boolean): void { 
    // login function that allows the user to go to user-page in case of credentials are correct;
    //  "username": "atuny0",
     // "password": "9uQFF1Lh",

    if (valid) {
      // TODO: maybe used obs and subscribe here;;;
      this.authService.authByLogin(value, this.router);
    }
  }

}
