import { Injectable } from '@angular/core';
import { DataService } from './data-service';

@Injectable()
export class ServicesPage {

  constructor(private data: DataService) { }

  authByLogin(value: { username: string, password: string }, router?: any): void {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: value.username,
        password: value.password,
      })
    })
      .then(res => {
        console.log("RES", res);
        if (res) {
          res.json();
          if (res.status === 400) {
            window.alert("Credenciais introduzidas não estão corretas! Por favor tente novamente !");
          } else {
            router.navigate(['user-page']); // TODO: seach how can you pass data through navigate !!!
          }
        }
      });
  }
}