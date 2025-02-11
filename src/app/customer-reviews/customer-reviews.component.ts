import { Component } from '@angular/core';
import { CustomerReviewsPanelComponent } from './customer-reviews-panel/customer-reviews-panel.component';

@Component({
  selector: 'app-customer-reviews',
  standalone: true,
  imports: [CustomerReviewsPanelComponent],
  templateUrl: './customer-reviews.component.html',
  styleUrl: './customer-reviews.component.css'
})
export class CustomerReviewsComponent {
}
