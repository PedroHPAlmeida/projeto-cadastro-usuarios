import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import zxcvbn from 'zxcvbn';

@Directive({
  selector: '[appPasswordStrengthValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: PasswordStrengthValidatorDirective, multi: true }
  ]
})
export class PasswordStrengthValidatorDirective implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (!control || !control.value) return null;

    const result = zxcvbn(control.value);
    const passwordIsWeakOrMedium = result.score !== 4;

    if (passwordIsWeakOrMedium) {
      return { 'invalidPasswordStrength': true };
    }

    return null;
  }
}
