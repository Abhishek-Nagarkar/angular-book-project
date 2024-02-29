import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { FindBookComponent } from './find-book/find-book.component';
import { FindAllBooksComponent } from './find-all-books/find-all-books.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { BookPageComponent } from './book-page/book-page.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AddBookComponent,
    UpdateBookComponent,
    FindBookComponent,
    FindAllBooksComponent,
    DeleteBookComponent,
    BookPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    AddBookComponent,
    FindAllBooksComponent,
    FindBookComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    BookPageComponent
  ]
})
export class SpringAngularModule { }
