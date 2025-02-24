import { Component, OnInit } from '@angular/core';
import { Voyage, VoyagesService } from '../services/voyages.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-voyage-page',
  standalone: true,
  imports: [],
  templateUrl: './voyage-page.component.html',
  styleUrl: './voyage-page.component.scss'
})
export class VoyagePageComponent implements OnInit {
  voyage!: Voyage;

  constructor(
    private readonly voyagesService: VoyagesService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.voyage = this.voyagesService.findById("" + this.activatedRoute.snapshot.paramMap.get('id'));
    if(!this.voyage) {
      this.router.navigate(['/404']);
    }
  }
}
