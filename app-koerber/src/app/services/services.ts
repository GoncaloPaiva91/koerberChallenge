import { Injectable } from '@angular/core';

@Injectable()
export class ServicesPage {

  constructor() { }

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
        if (res) {
          res.json();
          if (res.status === 400) {
            window.alert("Credenciais introduzidas não estão corretas! Por favor tente novamente !");
          } else {
            router.navigate(['user-page']);
          }
        }
      });
  }
}