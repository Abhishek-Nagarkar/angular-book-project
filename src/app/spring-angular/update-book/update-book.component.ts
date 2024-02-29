import { Component } from '@angular/core';
import { Book } from '../Book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  book = new Book();

  constructor(private bookSvc: BookService){}

  update(){
    this.bookSvc.updateBook(this.book).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err.error)
      }
    )
  }
}
