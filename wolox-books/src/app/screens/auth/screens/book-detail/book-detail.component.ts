import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../../../../services/book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  public book: Book;
  id: any;

  constructor(
    private router: Router,
    private bookService: BookService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(res => this.id = res.id);
    this.bookService.getBookById(this.id).subscribe(response => this.book = response);
  }

  toBooksList() {
    this.router.navigate(['books']);
  }
}
