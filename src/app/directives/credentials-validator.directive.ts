import { Directive, Input, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { UsersPlaceholderService } from '../services/users-placeholder.service';

@Directive({
  selector: '[appCredentialsValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => CredentialsValidatorDirective),
      multi: true
    }
  ]
})
export class CredentialsValidatorDirective implements AsyncValidator {
  @Input({ alias: 'appCredentialsValidator', required: true }) propToCheck!: 'username' | 'email';

  constructor(
    private readonly _usersPlaceholderService: UsersPlaceholderService
  ) { }

  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this._usersPlaceholderService.getUsersPlaceholder().pipe(
      map((users) => {
        const hasUser = users.some((user) => user[this.propToCheck].toLowerCase() === control.value.trim().toLowerCase());
        const validatorKey = this.propToCheck === 'username' ? 'invalidUsername' : 'invalidEmail';
        return hasUser ? { [validatorKey]: true } : null;
      })
    );
  }
}
