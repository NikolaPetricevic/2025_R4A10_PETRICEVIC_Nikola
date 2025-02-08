import { Component } from '@angular/core';
import { ServicesGridComponent } from './services-grid/services-grid.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServicesGridComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
