import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  users: any = [];

  constructor(private readonly _usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._usersService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }
}
