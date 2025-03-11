import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pizza, PizzaService } from '../../../../services/pizza.service';

@Component({
  selector: 'app-pizza-list-page',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './pizza-list-page.component.html',
  styleUrl: './pizza-list-page.component.css',
})
export class PizzaListPageComponent {

  constructor(
    private readonly pizzaService: PizzaService,
  ) {}
  
  pizzas: Pizza[] = this.pizzaService.findAll();

  getStars(rating: number): string[] {
    return Array(5)
      .fill('☆')
      .map((_, i) => (i < rating ? '★' : '☆'));
  }

  formatPizzaUrl(name: string): string {
    return `/pizza/${name.toLowerCase().replace(/\s+/g, '-')}`;
  }
}
