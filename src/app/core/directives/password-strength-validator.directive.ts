import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Directive({
  selector: '[appPasswordStrength]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordStrengthValidator,
      multi: true
    }
  ]
})
export class PasswordStrengthValidator implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) {
      return null; // don't validate empty value
    }

    const hasUpperCase = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const minLength = value.length >= 8;

    const isValid = hasUpperCase && hasNumber && minLength;

    return isValid
      ? null
      : {
          passwordStrength: {
            hasUpperCase,
            hasNumber,
            minLength
          }
        };
  }
}
