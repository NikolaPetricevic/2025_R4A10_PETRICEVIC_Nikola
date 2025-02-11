import { Component } from '@angular/core';
import { ServiceItemComponent } from './service-item/service-item.component';

export type ServiceCard =  {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [ServiceItemComponent],
  templateUrl: './services-grid.component.html',
  styleUrl: './services-grid.component.css'
})
export class ServicesGridComponent {
  services:ServiceCard[] = [
    {
    title:"Search doctor", 
    description:"Choose your doctor from thousands of specialist, general, and trusted hospitals", 
    imageUrl:"search_doctor"
    },
    {
      title:"Online pharmacy",
      description:"Buy your medicines with our mobile application with a simple delivery system", 
      imageUrl:"online_pharmacy"
    },
    {
      title:"Consultation",
      description:"Free consultation with our trusted doctors and get the best recomendations", 
      imageUrl:"consultation"
    },
    {
      title:"Details info", 
      description:"Free consultation with our trusted doctors and get the best recomendations", 
      imageUrl:"details_info"
    },
    {
      title:"Emergency care", 
      description:"You can get 24/7 urgent care for yourself or your children and your lovely family", 
      imageUrl:"emergency_care"
    },
    {
      title:"Tracking",
      description:"Track and save your medical history and health data", 
      imageUrl:"tracking"
    }
  ];
}
