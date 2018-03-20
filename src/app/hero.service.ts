import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  // saves HEROES as a new variable in this service so it can be manipulated without changing HEROES
  heroes = HEROES;

  getHeroes(): Promise<Hero[]> {
    // this will return a successful promise containing the list of heroes that is specific to this service (maniuplatable)
    // make sure heroes is local to this service so it can be manipulated with 
    return Promise.resolve(this.heroes);
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

  // deleteHero function expects a promise to be returned (after getHeroes is called from within)
  // and that promise to be an array of heroes. 
  deleteHero(id : number): Promise<Hero[]> {
    // takes heroes, changes its value to the list of heroes after the one with specified
    // id has been filtered out
    this.heroes = this.heroes.filter((hero) => hero.id !== id);
    // returns the value from getHeroes()
    return this.getHeroes();
  }

}
