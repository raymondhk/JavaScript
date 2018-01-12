import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Object = {
    email: '',
    password: ''
  };
  err;

  constructor(
    private _uService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    console.log(this.user);
    this._uService.loginUser(this.user)
      .subscribe(
        (res) => { this._router.navigate(['/dash']); },
        (err) => {
          this.err = err.error;
          console.log(this.err);
        }
      );
  }

}
