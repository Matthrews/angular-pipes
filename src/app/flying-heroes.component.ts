import { Component } from '@angular/core';

import { HEROES } from './heroes';

@Component({
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styles: ['#flyers, #all {font-style: italic}', 'button {display: block}', 'input {margin: .25rem .25rem .5rem 0;}']
})
export class FlyingHeroesComponent {
  heroes: any[] = [];
  canFly = true;
  mutate = true;
  title = 'Flying Heroes (pure pipe)';

  constructor() { this.reset(); }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    const hero = {name, canFly: this.canFly};
    if (this.mutate) {
    // Pure pipe won't update display because heroes array reference is unchanged
    // Impure pipe will display
    this.heroes.push(hero);
    } else {
      // Pipe updates display because heroes array is a new object
      this.heroes = this.heroes.concat(hero);
    }
  }

  reset() { this.heroes = HEROES.slice(); }
}

////// Identical except for impure pipe //////
@Component({
  selector: 'app-flying-heroes-impure',
  templateUrl: './flying-heroes-impure.component.html',
  styles: ['#flyers, #all {font-style: italic}', 'button {display: block}', 'input {margin: .25rem .25rem .5rem 0;}'],
})
export class FlyingHeroesImpureComponent extends FlyingHeroesComponent {
  title = 'Flying Heroes (impure pipe)';
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/