import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Book } from '../../models/book';
import { Router } from '@angular/router';
import { BookApiService } from '../../services/book-api.service';

@Component({
  selector: 'app-create-book-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-book-page.component.html',
  styleUrl: './create-book-page.component.css',
})
export class CreateBookPageComponent {
  private readonly bookService = inject(BookApiService);
  constructor(
    private readonly router: Router,
  ) {}

 

  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(35)]),
    author: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)])
  });

  onSubmit() {
    if (this.bookForm.valid) {
      this.bookService.createBook(this.bookForm.value as Book).subscribe();
      this.router.navigate(['/']);
    }
  }
  
}
