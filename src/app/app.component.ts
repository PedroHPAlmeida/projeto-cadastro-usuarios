import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { BrazilianStatesService } from './services/brazilian-states.service';
import { User } from './interfaces/user.interface';
import { Genre } from './interfaces/genre.interface';
import { State } from './interfaces/state.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  users: User[] = [];
  genres: Genre[] = [];
  states: State[] = [];

  constructor(
    private readonly _usersService: UsersService,
    private readonly _genresService: GenresService,
    private readonly _brazilianStatesService: BrazilianStatesService,
  ) { }

  ngOnInit() {
    this.getUsers();
    this.getGenres();
    this.getStates();
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

  private getStates() {
    this._brazilianStatesService.getStates().subscribe((states) => {
      this.states = states;
    });
  }
}
