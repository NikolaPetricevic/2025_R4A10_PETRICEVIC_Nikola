import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Voyage, VoyagesService } from '../../services/voyages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-generation-voyage',
  standalone: true,
  imports: [],
  templateUrl: './modal-generation-voyage.component.html',
  styleUrl: './modal-generation-voyage.component.scss'
})
export class ModalGenerationVoyageComponent {
  @Input({required: true}) voyageGenere!: Voyage;
  @Output() fermerModal = new EventEmitter<null>();

  constructor(
    private readonly voyagesService: VoyagesService,
  ) {}

  ajouterVoyage(): void {
    this.voyagesService.add(this.voyageGenere);
    this.fermerModal.emit();
  }

  annulerAjout(): void {
    this.fermerModal.emit();
  }
}
