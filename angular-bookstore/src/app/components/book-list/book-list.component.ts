import { BookService } from './../../services/book.service';
import { Book } from './../../common/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books: Book[];

  constructor(private _bookService: BookService) { }

  ngOnInit(){
    this.listBooks();
  }

  listBooks() {
this._bookService.getBooks().subscribe(
  data => {
    this.books = data;
  }
)
  }

}
