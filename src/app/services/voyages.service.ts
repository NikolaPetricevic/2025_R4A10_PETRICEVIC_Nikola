import { Injectable } from '@angular/core';
import { DESTINATIONS, DESCRIPTIONS, PRIX, IMAGESURL } from './voyages.consts';
import { max } from 'rxjs';

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
      this.voyages.push({destination: DESTINATIONS[i], description: DESCRIPTIONS[i], prix: PRIX[i], id: "" + Math.floor(Math.random()*100000), imageUrl: IMAGESURL[i]})
    }
  }

  findAll(): Voyage[] {
    return this.voyages;
  }

  findById(id: string): Voyage {
    return this.voyages.find((voyage) => voyage.id == id) ?? {destination: '', description: '', prix: 0, id: '', imageUrl:''};
  }

  find20(page: number): Voyage[] {
    return this.voyages.slice(page*20, (page+1)*20);
  }

  add(voyage: Voyage): void {
    this.voyages.push(voyage);
  }

  delete(id: string): void {
    let voyageDelete: Voyage = this.findById(id);
    this.voyages.splice(this.voyages.indexOf(voyageDelete), 1);
  }

  genererVoyage(): Voyage {
    let maxRandom: number = DESTINATIONS.length;
    let voyageRandom: Voyage = {
      destination: DESTINATIONS[Math.floor(Math.random()*maxRandom)],
      description: DESCRIPTIONS[Math.floor(Math.random()*maxRandom)],
      prix: PRIX[Math.floor(Math.random()*maxRandom)],
      id: "" + Math.floor(Math.random()*100000),
      imageUrl: IMAGESURL[Math.floor(Math.random()*maxRandom)]
    };
    return voyageRandom;
  }

  pagesMax(): number {
    if(this.voyages.length == 0) {
      return 0;
    }
    return Math.floor((this.voyages.length-1)/20);
  }

  checkVide(voyage: Voyage): boolean {
      return voyage.destination == '' && voyage.description == '' && voyage.prix == 0 && voyage.id == '' && voyage.imageUrl == '';
  }
}
