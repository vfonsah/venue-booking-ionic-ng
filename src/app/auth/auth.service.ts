import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line: variable-name
  private _userIsAuthenticated = true;
  private _userId = 'ace';

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get userId() {
    return this._userId;
  }

  logIn() {
    this._userIsAuthenticated = true;
  }

  logOut() {
    this._userIsAuthenticated = false;
  }
  constructor() { }
}
