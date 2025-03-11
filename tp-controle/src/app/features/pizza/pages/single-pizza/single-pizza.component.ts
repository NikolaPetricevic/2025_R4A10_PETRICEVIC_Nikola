import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Pizza, PizzaService } from '../../../../services/pizza.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-pizza',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './single-pizza.component.html',
  styleUrl: './single-pizza.component.css',
})
export class SinglePizzaComponent {
  pizza!: Pizza;
  constructor(
    private readonly pizzaService: PizzaService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pizza = this.pizzaService.findOne("" + this.activatedRoute.snapshot.paramMap.get('name'));
    if(this.pizzaService.checkVide(this.pizza)) {
      this.router.navigate(['**']);
    }
  }

  get stars(): number[] {
    return Array(this.pizza.rating).fill(0);
  }
}
