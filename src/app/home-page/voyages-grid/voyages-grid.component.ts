import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Voyage, VoyagesService } from '../../services/voyages.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VoyagesItemComponent } from './voyages-item/voyages-item.component';

@Component({
  selector: 'app-voyages-grid',
  standalone: true,
  imports: [VoyagesItemComponent],
  templateUrl: './voyages-grid.component.html',
  styleUrl: './voyages-grid.component.scss'
})
export class VoyagesGridComponent {
  @Input() voyages!: Voyage[];
  @Output() voyageSupp = new EventEmitter<string>();

  constructor() {}

  supprimerVoyage(suppr: string): void {
    this.voyageSupp.emit(suppr);
  }
}