import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  books = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      response => { 
        this.books = response;
      }, 
      () => console.log('error getting books')
    );
  }
  
  getBooks() {
    return this.books;
  }
}
