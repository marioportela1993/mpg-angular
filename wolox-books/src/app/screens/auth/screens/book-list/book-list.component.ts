import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../../../services/book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  public books: Book[] = [];

  constructor(private bookService: BookService, private router: Router) { }

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

  getBookDetail(bookId: any) {
    this.router.navigate([`books/${bookId}`]);
  }
}
