import { Component } from '@angular/core';

export type CustomerReview = {
  customer_name: string;
  customer_description: string;
  imageUrl: string;
  review: string;
}

@Component({
  selector: 'app-customer-reviews-panel',
  standalone: true,
  imports: [],
  templateUrl: './customer-reviews-panel.component.html',
  styleUrl: './customer-reviews-panel.component.css'
})
export class CustomerReviewsPanelComponent {
  profile_names:string[] = ["",  ];
  profile_descriptions:string[] = [];
  profile_images:string[] = [  ];
  raeviews:string[] = [
             
             ];

  indexProfile:number = 0;
  
  reviews: CustomerReview[] = [
    {
      customer_name: "Customer 1",
      customer_description: "Desc 2", 
      imageUrl: "lego_1",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et risus consequat est pretium efficitur eu sed lectus. Donec et tellus id nulla molestie congue. Duis convallis urna a lorem condimentum, vitae consequat sapien efficitur."
    },
    {
      customer_name: "Customer 2",
      customer_description: "Desc 1",
      imageUrl: "lego_2",
      review: "Cras ut arcu in tortor mattis aliquet ut vitae libero. Sed eleifend eros purus, id posuere orci faucibus non. Sed non nunc justo."
    },
    {
      customer_name: "Customer 3",
      customer_description: "Desc 3",
      imageUrl: "lego_3",
      review: "In hac habitasse platea dictumst. In hac habitasse platea dictumst. Suspendisse tempor imperdiet ante, vitae vulputate orci aliquam at."
    }
  ]
}
