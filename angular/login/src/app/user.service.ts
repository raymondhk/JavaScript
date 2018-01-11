import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
  private users: Array<User> = [
    { name: 'Ray', email: 'ray@dojo.com', password: 'password', loggedIn: false }
  ];
  private loggedIn = false;

  constructor() { }

  getStatus(): boolean {
    return this.loggedIn;
  }

  setStatus() {
    if (this.loggedIn) {
      this.loggedIn = false;
    } else { this.loggedIn = true; }
  }

  getUsers(): Array<User> {
    return this.users;
  }

  setUsers(user: User) {
    this.users.push(user);
  }

}
