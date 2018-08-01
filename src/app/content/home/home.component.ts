import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: Array<string> = ['Ani', 'Armen', 'Karine'];

  constructor() {
  }

  removeUser(): void {
    this.users.pop();
  }

  addUser(): void {
    this.users.push('Karen');
  }

  ngOnInit() {
  }

}
