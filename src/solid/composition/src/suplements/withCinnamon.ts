import { Beverage } from '@codely/Beverage';

export class WithCinnamon implements Beverage {
  constructor(protected beverage: Beverage) {}

  price() {
    return this.beverage.price() + 5;
  }
}
