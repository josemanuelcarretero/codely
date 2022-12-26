import { Beverage } from '@codely/Beverage';

export class WithCream implements Beverage {
  constructor(protected beverage: Beverage) {}

  price() {
    return this.beverage.price() + 15;
  }
}
