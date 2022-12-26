import { Coffee } from '@codely/Coffee';
import { HotChocolate } from '@codely/HotChocolate';
import { WithCream } from '@codely/suplements/withCream';
import { WithMilk } from '@codely/suplements/withMilk';
import { Tea } from '@codely/Tea';
import { expect } from 'chai';

describe('Beverages Pricing Test', () => {
  it('computes coffee price', () => {
    const coffee = new Coffee();
    expect(coffee.price()).to.be.equal(120);
  });

  it('computes tea price', () => {
    const tea = new Tea();
    expect(tea.price()).to.be.equal(150);
  });

  it('computes hot chocolate price', () => {
    const hotChocolate = new HotChocolate();
    expect(hotChocolate.price()).to.be.equal(145);
  });

  it('computes tea with milk price', () => {
    const teaWithMilk = new WithMilk(new Tea());
    expect(teaWithMilk.price()).to.be.equal(160);
  });

  it('computes coffee with milk price', () => {
    const coffeeWithMilk = new WithMilk(new Coffee());
    expect(coffeeWithMilk.price()).to.be.equal(130);
  });

  it('computes coffee with milk and cream price', () => {
    const coffeeWithMilkAndCream = new WithCream(new WithMilk(new Coffee()));
    expect(coffeeWithMilkAndCream.price()).to.be.equal(145);
  });

  it('computes hot chocolate with cream price', () => {
    const hotChocolateWithCream = new WithCream(new HotChocolate());
    expect(hotChocolateWithCream.price()).to.be.equal(160);
  });
});
