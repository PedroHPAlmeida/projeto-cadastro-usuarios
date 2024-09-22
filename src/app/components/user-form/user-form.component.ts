import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Genre } from '../../interfaces/genre.interface';
import { State } from '../../interfaces/state.interface';
import { User } from '../../interfaces/user.interface';
import calcPasswordStrength from '../../utils/calc-password-strength';
import convertPtBrDateToDateObj from '../../utils/convert-pt-br-date-to-date-obj';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import convertDateObjToPtBrDate from '../../utils/convert-date-obj-to-pt-br-date';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnChanges, OnInit {
  passwordStrength = 0;
  dateValue: Date | null = null;
  minDate: Date | null = null;
  maxDate: Date | null = null;

  @Input() genres: Genre[] = [];
  @Input() states: State[] = [];
  @Input() user: User = {} as User;

  ngOnInit() {
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      this.onPasswordChange(this.user.password);
      this.setBirthDateToDatepicker(this.user.birthDate);
    }
  }

  onPasswordChange(password: string) {
    this.passwordStrength = calcPasswordStrength(password);
  }

  onDateChange(event: MatDatepickerInputEvent<any, any>) {
    if(!event.value) return;
    this.user.birthDate = convertDateObjToPtBrDate(event.value);
    console.log(this.user.birthDate);
  }

  private setBirthDateToDatepicker(birthDate: string) {
    this.dateValue = convertPtBrDateToDateObj(birthDate);
  }

  private setMinAndMaxDate() {
    this.minDate = new Date(new Date().getFullYear() - 100, 0, 1);
    this.maxDate = new Date();
  }
}
