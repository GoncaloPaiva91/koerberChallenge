import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.html',
  styleUrls: ['./user-page.scss']
})
export class UserPageComponent implements OnInit {

 constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(): void {
    this.router.navigate(['login-page']);
  }
}
