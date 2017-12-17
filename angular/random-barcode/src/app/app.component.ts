import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  arr = [];
  colors = {
    0: 'seagreen',
    1: 'blue',
    2: 'red',
    3: 'teal',
    4: 'lightblue',
    5: 'maroon'
  };
  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.arr.push(this.colors[Math.floor(Math.random() * 6)]);
    }
    console.log(this.arr);
  }
}
