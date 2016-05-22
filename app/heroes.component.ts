import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',

    styleUrls: ['app/heroes.component.css'],

    templateUrl: 'app/heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes;
    });
  }

  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this.router.navigate(link);
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }
}
