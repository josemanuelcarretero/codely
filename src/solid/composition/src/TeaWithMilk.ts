import { Tea } from '@codely/Tea';

export class TeaWithMilk extends Tea {
  price() {
    return super.price() + 10;
  }
}
