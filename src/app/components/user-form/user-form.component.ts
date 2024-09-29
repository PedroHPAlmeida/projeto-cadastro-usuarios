import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Genre } from '../../interfaces/genre.interface';
import { State } from '../../interfaces/state.interface';
import { User } from '../../interfaces/user.interface';
import calcPasswordStrength from '../../utils/calc-password-strength';
import convertPtBrDateToDateObj from '../../utils/convert-pt-br-date-to-date-obj';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import convertDateObjToPtBrDate from '../../utils/convert-date-obj-to-pt-br-date';
import { NgForm } from '@angular/forms';

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

  displayedColumns: string[] = ['title', 'band', 'genre', 'favorite'];
  filteredGenres: Genre[] = [];

  @Input() genres: Genre[] = [];
  @Input() states: State[] = [];
  @Input() user: User = {} as User;

  @Output('onFormSubmit') onFormSubmitEmitt = new EventEmitter<void>();

  constructor(private readonly el: ElementRef) { }

  ngOnInit() {
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      this.onPasswordChange(this.user.password);
      this.setBirthDateToDatepicker(this.user.birthDate);
      this.filteredGenres = this.genres;
    }
  }

  onPasswordChange(password: string) {
    this.passwordStrength = calcPasswordStrength(password);
  }

  onDateChange(event: MatDatepickerInputEvent<any, any>) {
    if (!event.value) return;
    this.user.birthDate = convertDateObjToPtBrDate(event.value);
    console.log(this.user.birthDate);
  }

  filterGenres(text: string) {
    if (typeof text !== 'string') return;

    const searchTerm = text.toLowerCase();
    this.filteredGenres = this.genres.filter(genre => genre.description.toLowerCase().includes(searchTerm));
  }

  displayFn(id: number): string {
    const genre = this.genres.find(genre => genre.id === id);
    return genre ? genre.description : '';
  }

  isAnyCheckboxChecked(): boolean {
    return this.user.musics.some(music => music.isFavorite);
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) {
      this.focusOnInvalidControl(form);
      return;
    }
    this.onFormSubmitEmitt.emit();
  }

  private focusOnInvalidControl(form: NgForm) {
    for (let control of Object.keys(form.controls)) {
      if (form.controls[control].invalid) {
        const invalidControl: HTMLElement = this.el.nativeElement.querySelector(`[name=${control}]`);
        invalidControl.focus();
        break;
      }
    }
  }

  private setBirthDateToDatepicker(birthDate: string) {
    this.dateValue = convertPtBrDateToDateObj(birthDate);
  }

  private setMinAndMaxDate() {
    this.minDate = new Date(new Date().getFullYear() - 100, 0, 1);
    this.maxDate = new Date();
  }
}
