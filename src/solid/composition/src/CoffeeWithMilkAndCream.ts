import { Coffee } from '@codely/Coffee';

export class CoffeeWithMilkAndCream extends Coffee {
  price() {
    return super.price() + 25;
  }
}
