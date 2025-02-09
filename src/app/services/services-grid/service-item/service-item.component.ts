import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-item',
  standalone: true,
  imports: [],
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.css'
})
export class ServiceItemComponent {
  @Input({required: true}) title!: string;
  @Input({required: true}) description!: string;
  @Input({required: true}) image!: string;
}
