import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  users: any = [];
  genres: any = [];

  constructor(
    private readonly _usersService: UsersService,
    private readonly _genresService: GenresService,
  ) { }

  ngOnInit() {
    this.getUsers();
    this.getGenres();
  }

  private getUsers() {
    this._usersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  private getGenres() {
    this._genresService.getGenres().subscribe((genres) => {
      this.genres = genres;
    });
  }
}
