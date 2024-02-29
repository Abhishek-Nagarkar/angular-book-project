import { Component } from '@angular/core';
import { Book } from '../Book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  book = new Book();

  constructor(private bookSvc: BookService){}

  add(){
    this.bookSvc.addBook(this.book).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err.error);
      }
    )
  }
}
