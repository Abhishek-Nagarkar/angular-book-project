import { Component } from '@angular/core';
import { Book } from '../Book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-find-book',
  templateUrl: './find-book.component.html',
  styleUrls: ['./find-book.component.css']
})
export class FindBookComponent {

  book = new Book();
  bookId: number = 0;
  constructor(private bookSvc: BookService){}

  findBook(){
    this.bookSvc.findBook(this.bookId).subscribe(
      res => {
        this.book = res;
      },
      err => {
        console.log(err.error);
      }
    )
  }
}
