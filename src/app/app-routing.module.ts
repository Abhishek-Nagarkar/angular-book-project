import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './spring-angular/add-book/add-book.component';
import { UpdateBookComponent } from './spring-angular/update-book/update-book.component';
import { FindBookComponent } from './spring-angular/find-book/find-book.component';
import { FindAllBooksComponent } from './spring-angular/find-all-books/find-all-books.component';
import { DeleteBookComponent } from './spring-angular/delete-book/delete-book.component';

const routes: Routes = [
  {path:"", component: AddBookComponent},
  {path:"addBook", component: AddBookComponent},
  {path:"updateBook", component: UpdateBookComponent},
  {path:"findBook", component: FindBookComponent},
  {path:"findAllBooks", component: FindAllBooksComponent},
  {path:"deleteBook", component: DeleteBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
