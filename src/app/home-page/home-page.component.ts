import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { VoyagesGridComponent } from './voyages-grid/voyages-grid.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, VoyagesGridComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  
}
