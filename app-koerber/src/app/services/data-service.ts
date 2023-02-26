import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private _name: string;

  constructor() {
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  clearDataService(): void {
    this.name = '';
  }
}
