import { Component, Input } from '@angular/core';
import { Voyage } from '../../../services/voyages.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-voyages-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './voyages-item.component.html',
  styleUrl: './voyages-item.component.scss'
})
export class VoyagesItemComponent {
  @Input({required: true}) voyage!: Voyage;
}
