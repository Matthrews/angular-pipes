import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-birthday2',
  template: `
    <p>The hero's birthday is {{ birthday | date:format }}</p>
    <button (click)="toggleFormat()">Toggle Format</button>
  `
})
export class HeroBirthday2Component {
  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/