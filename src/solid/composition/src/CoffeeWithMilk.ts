import { Coffee } from '@codely/Coffee';

export class CoffeeWithMilk extends Coffee {
  price() {
    return super.price() + 10;
  }
}
