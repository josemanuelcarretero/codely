import { HotChocolate } from '@codely/HotChocolate';

export class HotChocolateWithCream extends HotChocolate {
  price() {
    return super.price() + 15;
  }
}
