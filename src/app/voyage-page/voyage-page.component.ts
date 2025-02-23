import { Component, OnInit } from '@angular/core';
import { Voyage, VoyagesService } from '../services/voyages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voyage-page',
  standalone: true,
  imports: [],
  templateUrl: './voyage-page.component.html',
  styleUrl: './voyage-page.component.scss'
})
export class VoyagePageComponent implements OnInit {
  listeVoyages!: Voyage[];

  constructor(
    private readonly voyagesService: VoyagesService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
      this.listeVoyages = this.voyagesService.findAll();
      if (!this.listeVoyages) {
        this.router.navigate(['/404']);
      }
  }
}
