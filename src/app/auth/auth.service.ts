import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line: variable-name
  private _userIsAuthenticated = true;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  logIn() {
    this._userIsAuthenticated = true;
  }

  logOut() {
    this._userIsAuthenticated = false;
  }
  constructor() { }
}
