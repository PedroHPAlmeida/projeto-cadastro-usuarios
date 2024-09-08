import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Genre } from '../../interfaces/genre.interface';
import { State } from '../../interfaces/state.interface';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() genres: Genre[] = [];
  @Input() states: State[] = [];
  @Input() user: User = {} as User;

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
  }
}
