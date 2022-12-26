import { Beverage } from '@codely/Beverage';

export class WithMilk implements Beverage {
  constructor(protected beverage: Beverage) {}

  price() {
    return this.beverage.price() + 10;
  }
}
