import { Injectable } from '@angular/core';

export type Voyage = {
  destination: string,
  description: string,
  prix: number,
  id: string,
}

@Injectable({
  providedIn: 'root'
})
export class VoyagesService {

  constructor() { }

  private readonly voyages: Voyage[] = [
    {
      destination: "Paris",
      description: "Bof comme ville honnêtement pas ouf",
      prix: 2000,
      id: "" + Math.floor(Math.random()*100),
    },
    {
      destination: "Londres",
      description: "C'est la ville en Angleterre là",
      prix: 50,
      id: "" + Math.floor(Math.random()*100),
    },
  ]

  findAll(): Voyage[] {
    return this.voyages;
  }
}
