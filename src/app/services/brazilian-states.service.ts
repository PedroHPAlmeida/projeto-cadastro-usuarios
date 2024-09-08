import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../interfaces/state.interface';

@Injectable({
  providedIn: 'root'
})
export class BrazilianStatesService {
  private readonly states: State[] = [
    { id: 12, description: 'Acre', abbreviation: 'AC' },
    { id: 27, description: 'Alagoas', abbreviation: 'AL' },
    { id: 16, description: 'Amapá', abbreviation: 'AP' },
    { id: 13, description: 'Amazonas', abbreviation: 'AM' },
    { id: 29, description: 'Bahia', abbreviation: 'BA' },
    { id: 23, description: 'Ceará', abbreviation: 'CE' },
    { id: 53, description: 'Distrito Federal', abbreviation: 'DF' },
    { id: 32, description: 'Espírito Santo', abbreviation: 'ES' },
    { id: 52, description: 'Goiás', abbreviation: 'GO' },
    { id: 21, description: 'Maranhão', abbreviation: 'MA' },
    { id: 51, description: 'Mato Grosso', abbreviation: 'MT' },
    { id: 50, description: 'Mato Grosso do Sul', abbreviation: 'MS' },
    { id: 31, description: 'Minas Gerais', abbreviation: 'MG' },
    { id: 15, description: 'Pará', abbreviation: 'PA' },
    { id: 25, description: 'Paraíba', abbreviation: 'PB' },
    { id: 41, description: 'Paraná', abbreviation: 'PR' },
    { id: 26, description: 'Pernambuco', abbreviation: 'PE' },
    { id: 22, description: 'Piauí', abbreviation: 'PI' },
    { id: 33, description: 'Rio de Janeiro', abbreviation: 'RJ' },
    { id: 24, description: 'Rio Grande do Norte', abbreviation: 'RN' },
    { id: 43, description: 'Rio Grande do Sul', abbreviation: 'RS' },
    { id: 11, description: 'Rondônia', abbreviation: 'RO' },
    { id: 14, description: 'Roraima', abbreviation: 'RR' },
    { id: 42, description: 'Santa Catarina', abbreviation: 'SC' },
    { id: 35, description: 'São Paulo', abbreviation: 'SP' },
    { id: 28, description: 'Sergipe', abbreviation: 'SE' },
    { id: 17, description: 'Tocantins', abbreviation: 'TO' }
  ];

  getStates(): Observable<State[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.states);
        observer.complete();
      }, 3000)
    })
  };
}
