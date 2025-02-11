import { Component, Input } from '@angular/core';
import { ServiceCard, ServicesGridComponent } from '../services-grid.component';


@Component({
  selector: 'app-service-item',
  standalone: true,
  imports: [ServicesGridComponent],
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.css'
})
export class ServiceItemComponent {
  @Input({required: true}) card!:ServiceCard;
}