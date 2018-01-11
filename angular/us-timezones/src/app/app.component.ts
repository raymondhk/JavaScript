import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  now = moment().format('MMMM Do YYYY, h:mm:ss a');
  zones = {
    0: false,
    1: false,
    2: false,
    3: false
  };

  ngOnInit() {
    // this.utcTime();
  }

  utcTime(): void {
    setInterval(() => {
      this.now = moment().format('MMMM Do YYYY, h:mm:ss a');
    }, 1000);
  }

  timeClick(zone) {
    this.zones[zone] = true;
    console.log(this.zones);
    setInterval(() => {
      this.now = moment().subtract(zone, 'h').format('MMMM Do YYYY, h:mm:ss a');
    }, 1000);
  }

}
