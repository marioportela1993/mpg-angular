import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlApi = environment.booksApiUrl;

  constructor(private http: HttpClient, private localStore: LocalStorageService) {}

  createUser(post: any): Observable<any> {
    console.log(`Attempting to create the user ${post}`);
    return this.http.post(`${this.urlApi}/users`, post);
  }

  signInUser(user: any): Observable<any> {
    console.log(`Attempting to login the user ${JSON.stringify(user)}`);
    return this.http.post(`${this.urlApi}/users/sessions`, user);
  }

  loggedIn(){
    return !!this.localStore.getValue('token');
  }

  getToken() {
    return this.localStore.getValue('token');
  }
}
