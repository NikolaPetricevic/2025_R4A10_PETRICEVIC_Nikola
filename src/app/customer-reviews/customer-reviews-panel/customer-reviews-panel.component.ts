import { Component, Input } from '@angular/core';
import { CustomerReview, CustomerReviewsComponent } from '../customer-reviews.component';

@Component({
  selector: 'app-customer-reviews-panel',
  standalone: true,
  imports: [CustomerReviewsComponent],
  templateUrl: './customer-reviews-panel.component.html',
  styleUrl: './customer-reviews-panel.component.css'
})
export class CustomerReviewsPanelComponent {
  @Input({required: true}) review!: CustomerReview;
}
