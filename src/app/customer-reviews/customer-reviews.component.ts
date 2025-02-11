import { Component } from '@angular/core';
import { CustomerReviewsPanelComponent } from './customer-reviews-panel/customer-reviews-panel.component';
import { ButtonLineComponent } from './button-line/button-line.component';

export type CustomerReview = {
  customer_name: string;
  customer_description: string;
  imageUrl: string;
  text_review: string;
}

@Component({
  selector: 'app-customer-reviews',
  standalone: true,
  imports: [CustomerReviewsPanelComponent, ButtonLineComponent],
  templateUrl: './customer-reviews.component.html',
  styleUrl: './customer-reviews.component.css'
})
export class CustomerReviewsComponent {

  indexReview:number = 0;
  
  reviews: CustomerReview[] = [
    {
      customer_name: "Customer 1",
      customer_description: "Desc 1", 
      imageUrl: "lego_1",
      text_review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et risus consequat est pretium efficitur eu sed lectus. Donec et tellus id nulla molestie congue. Duis convallis urna a lorem condimentum, vitae consequat sapien efficitur."
    },
    {
      customer_name: "Customer 2",
      customer_description: "Desc 2",
      imageUrl: "lego_2",
      text_review: "Cras ut arcu in tortor mattis aliquet ut vitae libero. Sed eleifend eros purus, id posuere orci faucibus non. Sed non nunc justo."
    },
    {
      customer_name: "Customer 3",
      customer_description: "Desc 3",
      imageUrl: "lego_3",
      text_review: "In hac habitasse platea dictumst. In hac habitasse platea dictumst. Suspendisse tempor imperdiet ante, vitae vulputate orci aliquam at."
    }
  ]

  onReviewChange(prevNext: number) {
    if((prevNext == -1 && this.indexReview != 0) || (prevNext == 1 && this.indexReview != this.reviews.length-1)) {
      this.indexReview += prevNext;
    }
  }

}
