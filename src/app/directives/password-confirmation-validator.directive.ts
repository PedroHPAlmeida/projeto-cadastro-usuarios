import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordConfirmationValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: PasswordConfirmationValidatorDirective, multi: true }
  ],
})
export class PasswordConfirmationValidatorDirective implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (!control.value.passwordConfirmation) return null;

    const passwordConfirmationControl = control.get('passwordConfirmation');
    if (control.value.password !== control.value.passwordConfirmation) {
      const error = { invalidPasswordConfirmation: true };
      passwordConfirmationControl?.setErrors(error);
      return error;
    }
    return null;
  }
}
