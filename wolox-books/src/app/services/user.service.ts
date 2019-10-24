import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlApi = environment.booksApiUrl;

  constructor(private http: HttpClient) {}

  createUser(post: any): Observable<any> {
    console.log(`Attempting to create the user ${post}`);
    return this.http.post(`${this.urlApi}/users`, post);
  }
}
