import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private _email: string;

  constructor() {
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  clearDataService(): void {
    this._email = '';
  }
}
