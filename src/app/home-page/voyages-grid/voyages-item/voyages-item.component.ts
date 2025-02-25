import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Voyage } from '../../../services/voyages.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voyages-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './voyages-item.component.html',
  styleUrl: './voyages-item.component.scss'
})
export class VoyagesItemComponent {
  @Input({required: true}) voyage!: Voyage;
  @Output() suppr = new EventEmitter<string>();

  supprimerVoyage(): void {
    this.suppr.emit(this.voyage.id);
  }
}
