import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data-service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.html',
  styleUrls: ['./user-page.scss']
})

export class UserPageComponent implements OnInit {
  public cacheEmail: string;
  public id: number;
  public email: string;
  public firstName: string;
  public lastName: string;
  public posts: any[];
  public showEmailErrorMessage: boolean = false;

  constructor(private router: Router, public dataService: DataService) { }

  ngOnInit() {
    this.getUser(); // get user information when you render this ts;
  }

  getUser(): void { // get a single user;
    fetch('https://dummyjson.com/users/1')
      .then((res) => res.json())
      .then((response: any) => {
        if (response) {
          this.id = response.id; // get the user ID for list of posts;
          this.firstName = response.firstName; // taking the response and set first name on header
          this.lastName = response.lastName; // taking the response and set last name on header
          this.getPosts();
        }
      });
  }

  getPosts(): void { // getting the list of posts;
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${this.id ? this.id : 'undefined'}`;
    fetch(url)
    .then(res => res.json())
    .then((response: any) => {
      if (response && response.length > 0) {
        this.posts = response;
      }
    })
  }

  openPostModal(): void { // open Modal of post new post;
 // returns true or false
  }

  checkEmail(): void { // using this regex for see if is actually an e-mail by @ 
    const rgExp: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const expressionResult: boolean = rgExp.test(this.email);
    if (expressionResult) {
      this.showEmailErrorMessage = false;
      this.dataService.email = this.email; // cache e-mail ; point 5;
    } else {
      this.showEmailErrorMessage = true; // show the error message;
    }
  }

  logout(): void {
    this.router.navigate(['login-page']); // return to login-page;
  }
}
