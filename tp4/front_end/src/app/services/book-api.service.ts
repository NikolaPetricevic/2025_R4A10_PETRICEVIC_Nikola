import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  private readonly API_URL = 'http://localhost:5000';
  constructor(private readonly http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_URL + '/books');
  }

  getBookById()


}
