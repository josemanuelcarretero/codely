import { Beverage } from '@codely/beverage';

export class BeverageStub implements Beverage {
  price(): number {
    return 100;
  }
}
