import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHero(id: number) {
    return Promise.resolve(HEROES)
      .then(heroes => heroes.find(hero => hero.id === id) || [])
  }

  getHeroes() {
    return Promise.resolve(HEROES);
  }
}
