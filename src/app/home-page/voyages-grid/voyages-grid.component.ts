import { Component } from '@angular/core';
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
  voyages!: Voyage[];

  constructor(
    private readonly voyagesService: VoyagesService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.voyages = this.voyagesService.findAll();
    if(!this.voyages) {
      this.router.navigate(['/404']);
    }
  }
}