import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Genre } from '../../interfaces/genre.interface';
import { State } from '../../interfaces/state.interface';
import { User } from '../../interfaces/user.interface';
import calcPasswordStrength from '../../utils/calc-password-strength';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnChanges {
  passwordStrength = 0;

  @Input() genres: Genre[] = [];
  @Input() states: State[] = [];
  @Input() user: User = {} as User;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      this.onPasswordChange(this.user.password);
    }
  }

  onPasswordChange(password: string) {
    this.passwordStrength = calcPasswordStrength(password);
  }
}
