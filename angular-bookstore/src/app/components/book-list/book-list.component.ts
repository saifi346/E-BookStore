import { BookService } from './../../services/book.service';
import { Book } from './../../common/book';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books: Book[];
  currentCategoryId : number;

  constructor(private _bookService: BookService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this._activatedRoute.paramMap.subscribe(()=>{
      this.listBooks();
    }
    )
    this.listBooks();
  }

  listBooks() {
   const hasCtaegoryId: boolean =  this._activatedRoute.snapshot.paramMap.has('id');

   if(hasCtaegoryId){
     this.currentCategoryId = +this._activatedRoute.snapshot.paramMap.get('id');
   }
   else{
     this.currentCategoryId = 1;
   }

   this._bookService.getBooks().subscribe(
   data => {
    this.books = data;
  }
)
  }

}
