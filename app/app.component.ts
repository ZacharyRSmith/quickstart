import { Component } from '@angular/core';

import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';

@Component({
  directives: [HeroesComponent],

  providers: [HeroService],

  selector: 'my-app',

  template: `
    <h1>{{title}}</h1>

    <my-heroes></my-heroes>
  `
})

export class AppComponent {
  title = 'Tour of Heroes';
}
