import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Voyage, VoyagesService } from '../services/voyages.service';

@Component({
  selector: 'app-generation-page',
  standalone: true,
  imports: [],
  templateUrl: './generation-page.component.html',
  styleUrl: './generation-page.component.scss'
})
export class GenerationPageComponent {
  constructor(
      private readonly voyagesService: VoyagesService,
      private readonly router: Router,
    ) {}

  voyageGenere!: Voyage;

  ngOnInit(): void {
    this.voyageGenere = this.voyagesService.genererVoyage();
  }

  regenererVoyage(): void {
    this.voyageGenere = this.voyagesService.genererVoyage();
  }

  ajouterVoyage(): void {
    this.voyagesService.add(this.voyageGenere);
    this.router.navigate(['/home']);
  }
}
