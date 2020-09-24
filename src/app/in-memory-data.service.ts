import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Homelander' },
      { id: 12, name: 'Maeve' },
      { id: 13, name: 'Transluscent' },
      { id: 14, name: 'A-Train' },
      { id: 15, name: 'The Deep' },
      { id: 16, name: 'Black Noir' },
      { id: 17, name: 'Starlight' },
      { id: 18, name: 'Stormfront' },
      { id: 19, name: 'Lamplighter' },
      { id: 20, name: 'Shockwave' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}