import { Hero } from "./hero.model";
import { Component } from "@angular/core";
/**
 * hero-form.component created on 12/14/16 4:21 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */

@Component({
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: 'hero-form.component.html'
})

export class HeroFormComponent {

  powers = [
    'Really Smart',
    'Super Flexible',
    'Super Hot',
    'Weather Changer'
  ];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
