import { Component, inject } from '@angular/core';
import { Pizza, PizzaService } from '../../../../services/pizza.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderLocalService } from '../../../../services/order.service';
import { CreateOrder } from '../../../../models/order';

@Component({
  selector: 'app-order-pizza-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './order-pizza-page.component.html',
  styleUrl: './order-pizza-page.component.css'
})
export class OrderPizzaPageComponent {
  private readonly orderService = inject(OrderLocalService);
  private readonly pizzaService = inject(PizzaService);
  constructor(
    private readonly router: Router,
  ) {}

  orderForm = new FormGroup({
    pizza: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    paymentMethod: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),   
  });

  onSubmit() {
    if(this.orderForm.valid) {
      this.orderService.create(this.orderForm.value as CreateOrder);
      this.router.navigate(['/']);
    }
  }

  get pizzas(): Pizza[] {
    return this.pizzaService.findAll();
  }

}