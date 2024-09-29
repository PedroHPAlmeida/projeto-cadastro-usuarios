import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { BrazilianStatesService } from './services/brazilian-states.service';
import { User } from './interfaces/user.interface';
import { Genre } from './interfaces/genre.interface';
import { State } from './interfaces/state.interface';
import { MatDialog } from '@angular/material/dialog';
import { UserBeforeAndAfterDialogComponent } from './components/user-before-and-after-dialog/user-before-and-after-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  userSelected: User = {} as User;
  userSelectedIndex: number | undefined;

  users: User[] = [];
  genres: Genre[] = [];
  states: State[] = [];

  constructor(
    private readonly _usersService: UsersService,
    private readonly _genresService: GenresService,
    private readonly _brazilianStatesService: BrazilianStatesService,
    private readonly _matDialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }

  onUserSelected(userIndex: number) {
    const userFound = this.users[userIndex];
    if (userFound) {
      this.userSelectedIndex = userIndex;
      this.userSelected = structuredClone(userFound);
    }
  };

  onFormSubmit() {
    if (this.userSelectedIndex === undefined) return;

    const originalUser = this.users[this.userSelectedIndex];
    this.openBeforeAndAfterDialog(originalUser, this.userSelected, this.userSelectedIndex);
  }

  private openBeforeAndAfterDialog(originalUser: User, updatedUser: User, userSelectedIndex: number) {
    const dialogRef = this._matDialog.open(UserBeforeAndAfterDialogComponent, {
      data: {
        originalUser: originalUser,
        updatedUser: updatedUser,
      },
      minWidth: '70%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.confirmUserUpdate(updatedUser, userSelectedIndex);
      }
    });
  }

  private confirmUserUpdate(updatedUser: User, userSelectedIndex: number) {
    this.users[userSelectedIndex] = structuredClone(updatedUser);
    console.group('Alteração finalizada - Lista de usuários atualizada:');
    console.log('Lista de usuários atual:', this.users);
    console.groupEnd();
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
