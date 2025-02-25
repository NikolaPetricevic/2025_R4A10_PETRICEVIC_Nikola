import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Voyage, VoyagesService } from '../../services/voyages.service';

@Component({
  selector: 'app-modal-suppression-voyage',
  standalone: true,
  imports: [],
  templateUrl: './modal-suppression-voyage.component.html',
  styleUrl: './modal-suppression-voyage.component.scss'
})
export class ModalSuppressionVoyageComponent {
  @Input({required: true}) voyageSupp!: Voyage;
  @Output() fermerModal = new EventEmitter<string>();

  constructor(
    private readonly voyagesService: VoyagesService,
  ) {}

  supprimerVoyage(): void {
    this.voyagesService.delete(this.voyageSupp.id);
    this.fermerModal.emit("voyageSupp")
  }

  annulerSupp(): void {
    this.fermerModal.emit("annulation");
  }
}
