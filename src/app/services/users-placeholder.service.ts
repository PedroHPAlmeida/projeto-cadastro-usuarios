import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPlaceholder } from '../interfaces/user-placeholder.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersPlaceholderService {
  constructor(private readonly _httpClient: HttpClient) { }

  getUsersPlaceholder(): Observable<UserPlaceholder> {
    return this._httpClient.get<UserPlaceholder>('https://jsonplaceholder.typicode.com/users');
  }
}
