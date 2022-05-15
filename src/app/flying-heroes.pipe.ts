/* tslint:disable use-pipe-transform-interface */
import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from './heroes';

@Pipe({ name: 'flyingHeroes' })
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: Hero[]) {
    return allHeroes.filter(hero => hero.canFly);
  }
}

/////// Identical except for the pure flag
@Pipe({
  name: 'flyingHeroesImpure',
  pure: false
})
export class FlyingHeroesImpurePipe extends FlyingHeroesPipe {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/