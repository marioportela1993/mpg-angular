import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  urlApi = environment.booksApiUrl;

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    console.log('Attempting to get books');
    return this.http.get(`${this.urlApi}/books`);
  }
}
