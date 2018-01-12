import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class UserService {

  constructor(
    private _http: HttpClient
  ) { }

  // User Registration
  addUser(user) {
    return this._http.post('/api/users', user);
  }

  // User Login
  loginUser(user) {
    console.log(user);
    return this._http.post('/api/login', user);
  }
}
