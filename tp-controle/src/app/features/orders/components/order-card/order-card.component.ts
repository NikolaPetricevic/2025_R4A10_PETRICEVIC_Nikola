import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from '../../../../models/order';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.css',
})
export class OrderCardComponent {
  @Input({required: true}) order!: Order;
  @Output() onDelete = new EventEmitter<string>();

  removeOrder() {
    this.onDelete.emit(this.order.id);
  }
}
