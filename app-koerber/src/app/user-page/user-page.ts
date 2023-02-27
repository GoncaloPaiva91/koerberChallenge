import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data-service';
import { ModalComponent } from '../modal/new-post-modal';
// import { BsModalRef, BsModalService } from  'ngx-bootstrap/modal/';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
// import {subscribe} from 'rxjs'

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
  public bsModalRef: NgbModalRef;

  constructor(private router: Router, private modalService: NgbModal, public dataService: DataService) { }

  ngOnInit() {
    this.getUser(); // get user information when you render this ts;
  }

  getUser(): void { // get a single user;
    // TODO: passing this requests do data.service;
    fetch('https://dummyjson.com/users/1')
      .then((res) => res.json())
      .then((response: any) => {
        if (response) {
          this.id = response.id; // get the user ID for list of posts;
          this.firstName = response.firstName; // taking the response and set first name on header
          this.lastName = response.lastName; // taking the response and set last name on header
        }
      });
  }

  getPosts(): void { // getting the list of posts;
    // TODO: passing this requests do data.service;
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
    this.bsModalRef = this.modalService.open(ModalComponent, {backdrop: 'static', size: 'lg', keyboard: false, centered: true});
     this.bsModalRef.result.then((result) => {
      if (result) {
       this.posts.push(result); // receives data from modal and add to posts ;
      }
    });
  }

  checkEmail(): void { // using this regex for see if is actually an e-mail by @ 
    const rgExp: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const expressionResult: boolean = rgExp.test(this.email);
    if (expressionResult) {
      this.showEmailErrorMessage = false; // not allow to open the error message;
      this.dataService.email = this.email; // cache e-mail ; point 5;
      this.getPosts(); // i presume that if e-mail is correct he opens the list of posts (?);
    } else {
      this.showEmailErrorMessage = true; // show the error message;
    }
  }

  logout(): void {
    this.router.navigate(['login-page']); // return to login-page;
  }
}
