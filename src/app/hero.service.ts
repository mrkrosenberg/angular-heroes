import { Hero } from './hero';
import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }

  deleteHero(id: number): void {
    let heroToDelete = HEROES.find(hero => hero.id === id);
    HEROES.splice(HEROES.indexOf(heroToDelete), 1); 
  }

  saveHero(name: string): void {
    let nextId = HEROES.reduce((prev, current) => (prev.id > current.id) ? prev : current).id + 1;
    console.log(nextId);
    let newHero = {
      name: name,
      id: nextId
    }
    HEROES.push(newHero);
  }
}
