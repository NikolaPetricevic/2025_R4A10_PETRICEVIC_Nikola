import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BooksInMemoryService } from '../../services/book-inmemory.service';
import { RouterLink } from '@angular/router';
import { BookApiService } from '../../services/book-api.service';

@Component({
  selector: 'app-book-list-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-list-page.component.html',
  styleUrl: './book-list-page.component.css',
})
export class BookListPageComponent implements OnInit {
  private readonly bookService = inject(BookApiService);
  private readonly destroyRef = inject(DestroyRef);

  books: Book[] = [];

  ngOnInit() {
    const subscription = this.bookService.getAllBooks().subscribe((data) => {
      this.books = data;
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

}
