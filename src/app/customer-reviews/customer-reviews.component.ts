import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-reviews',
  standalone: true,
  imports: [],
  templateUrl: './customer-reviews.component.html',
  styleUrl: './customer-reviews.component.css'
})
export class CustomerReviewsComponent {
  profile_names:string[] = ["Customer 1", "Customer 2", "Customer 3"];
  profile_descriptions:string[] = ["Desc 1", "Desc 2", "Desc 3"];
  profile_images:string[] = ["lego_1", "lego_2", "lego_3"];
  reviews:string[] = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et risus consequat est pretium efficitur eu sed lectus. Donec et tellus id nulla molestie congue. Duis convallis urna a lorem condimentum, vitae consequat sapien efficitur.",
             "Cras ut arcu in tortor mattis aliquet ut vitae libero. Sed eleifend eros purus, id posuere orci faucibus non. Sed non nunc justo.",
             "In hac habitasse platea dictumst. In hac habitasse platea dictumst. Suspendisse tempor imperdiet ante, vitae vulputate orci aliquam at."];

  indexProfile:number = 0;
  
}
