import { Injectable } from '@angular/core';
import { DESTINATIONS, DESCRIPTIONS, PRIX, IMAGESURL } from './voyages.consts';

export type Voyage = {
  destination: string,
  description: string,
  prix: number,
  id: string,
  imageUrl: string,
}

@Injectable({
  providedIn: 'root'
})
export class VoyagesService {

  private readonly voyages: Voyage[];

  constructor() {
    this.voyages = [];
    for (let i = 0; i < DESTINATIONS.length; i++) {
      this.voyages.push({destination: DESTINATIONS[i], description: DESCRIPTIONS[i], prix: PRIX[i], id: "" + Math.floor(Math.random()*100), imageUrl: IMAGESURL[i]})
    }
  }

  findAll(): Voyage[] {
    return this.voyages;
  }

  findById(id: string): Voyage {
    return this.voyages.find((voyage) => voyage.id == id) ?? {destination: '', description: '', prix: 0, id: '', imageUrl:''};
  }
}
