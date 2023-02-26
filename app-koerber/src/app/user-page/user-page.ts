import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesPage } from '../services/services';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.html',
  styleUrls: ['./user-page.scss']
})

export class UserPageComponent implements OnInit {
  public firstName: string;
  public lastName: string;
  public id: number;
  public email: string;
  public invalidEmail: boolean = true; 

  constructor(private router: Router) { }

  ngOnInit() {
    this.getUser(); // get user information when you render this ts;
  }

  getUser(): void { // get a single user;
    fetch('https://dummyjson.com/users/1')
      .then(res => res.json())
      .then(response => {
        if (response) {
          this.id = response.id; // get the user ID for list of posts;
          this.firstName = response.firstName; // taking the response and set first name on header
          this.lastName = response.lastName; // taking the response and set last name on header
        }
      });
  }

  getPosts(): void {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${this.id ? this.id : 'undefined'}`;
  
    fetch(url)
    .then(res => res.json())
    .then((response: any) => {
      console.log("res GET POSTS", response);
    })
  }

  openPostModal(): void { // open Modal of post new post;
 // returns true or false
  }

  checkEmail(): void {
    const rgExp: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; // using this regex for see if is actually an e-mail by @
    const expressionResult: boolean = rgExp.test(this.email);
    if (expressionResult) {
      this.invalidEmail = false;
      this.getPosts();
    } else {
      this.invalidEmail = true;
    }

  }

  logout(): void {
    this.router.navigate(['login-page']); // return to login-page;
  }
}
