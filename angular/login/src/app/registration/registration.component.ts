import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from './../user';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user = new User();

  constructor(private _us: UserService) { }

  ngOnInit() {
  }

  registerUser(myForm: NgForm) {
    this.user.loggedIn = true;
    this._us.setUsers(this.user);
    this._us.setStatus();
    this.user = new User();
  }

}
