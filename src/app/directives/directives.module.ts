import { NgModule } from "@angular/core";
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';

@NgModule({
    declarations: [
    EmailPatternValidatorDirective
  ],
    exports: [
      EmailPatternValidatorDirective,
    ],
})
export class DirectivesModule { }
