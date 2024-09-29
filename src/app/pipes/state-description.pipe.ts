import { Pipe, PipeTransform } from '@angular/core';
import { BrazilianStatesService } from '../services/brazilian-states.service';

@Pipe({
  name: 'stateDescription'
})
export class StateDescriptionPipe implements PipeTransform {
  constructor(private readonly _statesService: BrazilianStatesService) { }

  transform(stateId: number): string {
    return this._statesService.getStateDescription(stateId);
  }
}
