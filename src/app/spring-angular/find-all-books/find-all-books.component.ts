import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../Book';

@Component({
  selector: 'app-find-all-books',
  templateUrl: './find-all-books.component.html',
  styleUrls: ['./find-all-books.component.css']
})
export class FindAllBooksComponent {


  bookList : Book[] = [];
  constructor(private bookSvc: BookService){}

  findAll(){
    this.bookSvc.findAllBooks().subscribe(
      res => {this.bookList = res},
      err => {console.error(err.error)}
    )
  }
}
