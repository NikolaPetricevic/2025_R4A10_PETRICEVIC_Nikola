import { Component, SimpleChanges } from '@angular/core';
import { VoyagesGridComponent } from './voyages-grid/voyages-grid.component';
import { Voyage, VoyagesService } from '../services/voyages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [VoyagesGridComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  pageActuelle: number = 0;
  voyages20! : Voyage[];

  constructor(
    private readonly voyagesService: VoyagesService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.voyages20 = this.voyagesService.find20(this.pageActuelle);
    if(!this.voyages20) {
      this.router.navigate(['/404']);
    }
  }

  genererVoyage(): void {
    this.voyagesService.genererVoyage();
    this.voyages20 = this.voyagesService.find20(this.pageActuelle);
    this.router.navigate(['/']);
  }

  nextPage(): void {
    if(this.pageActuelle < this.voyagesService.pagesMax()) {
      this.pageActuelle++;
      this.voyages20 = this.voyagesService.find20(this.pageActuelle);
    }
  }

  prevPage(): void {
    if(this.pageActuelle > 0) {
      this.pageActuelle--;
      this.voyages20 = this.voyagesService.find20(this.pageActuelle);
    }
  }

  refresh(): void {
    this.voyages20 = this.voyagesService.find20(this.pageActuelle);
  }
}
