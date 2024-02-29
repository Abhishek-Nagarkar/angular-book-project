import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './Book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = "http://localhost:8080/book";

  constructor(private httpClient: HttpClient) { }

  //create
  addBook(book: Book) {
    return this.httpClient.post(this.baseUrl+"/addBook", book, {responseType: 'text'})
  }

  //find
  findBook(bookId: number): Observable<Book>{
    return this.httpClient.get<Book>(this.baseUrl+"/findBook/"+bookId);
  }

  //find all
  findAllBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.baseUrl+"/findAllBooks");
  }
  //update
  updateBook(book: Book): Observable<Book>{
    return this.httpClient.put<Book>(this.baseUrl+"/updateBook", book);
  }

  //delete
  deleteBook(bookId: number): Observable<Book>{
    return this.httpClient.delete<Book>(this.baseUrl+"/deleteBook/"+bookId);
  }
}
