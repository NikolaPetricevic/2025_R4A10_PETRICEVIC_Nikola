import { Component, OnInit } from '@angular/core';
import { Voyage, VoyagesService } from '../services/voyages.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalSuppressionVoyageComponent } from '../home-page/modal-suppression-voyage/modal-suppression-voyage.component';

@Component({
  selector: 'app-voyage-page',
  standalone: true,
  imports: [ModalSuppressionVoyageComponent],
  templateUrl: './voyage-page.component.html',
  styleUrl: './voyage-page.component.scss'
})
export class VoyagePageComponent implements OnInit {
  voyage!: Voyage;
  afficherSuppression: boolean = false;

  constructor(
    private readonly voyagesService: VoyagesService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.voyage = this.voyagesService.findById("" + this.activatedRoute.snapshot.paramMap.get('id'));
    if(this.voyagesService.checkVide(this.voyage)) {
      this.router.navigate(['/404']);
    }
  }

  afficherDialogueSuppression(): void {
    this.afficherSuppression = true;
  }

  masquerDialogueSuppression(): void {
    this.afficherSuppression = false;
  }

  gererActionModal(action: string): void {
    if(action == "voyageSupp") {
      this.supprimerVoyage();
      this.router.navigate(['/home']);
    }
    else {
      this.masquerDialogueSuppression();
    }
  }

  supprimerVoyage(): void {
    this.voyagesService.delete(this.voyage.id);
  }

}
