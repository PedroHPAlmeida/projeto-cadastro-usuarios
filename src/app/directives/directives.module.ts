import { NgModule } from "@angular/core";
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { CredentialsValidatorDirective } from './credentials-validator.directive';

@NgModule({
  declarations: [
    EmailPatternValidatorDirective,
    CredentialsValidatorDirective,
  ],
  exports: [
    EmailPatternValidatorDirective,
    CredentialsValidatorDirective,
  ],
})
export class DirectivesModule { }
