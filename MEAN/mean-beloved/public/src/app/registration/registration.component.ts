import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../models/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  user: User = new User();
  // pass = {
  //   confirm: ''
  // };

  constructor(
    private _uService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  register(form) {
    console.log(this.user);
    this._uService.addUser(this.user)
      .subscribe((res) => {
        this._router.navigate(['/dash']);
      });
  }

}
