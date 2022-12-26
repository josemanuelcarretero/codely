import { Coffee } from '@codely/Coffee';
import { HotChocolate } from '@codely/HotChocolate';
import { WithCinnamon } from '@codely/suplements/withCinnamon';
import { WithCream } from '@codely/suplements/withCream';
import { WithMilk } from '@codely/suplements/withMilk';
import { Tea } from '@codely/Tea';

describe('Beverages Pricing Test', () => {
  it('computes coffee price', () => {
    const coffee = new Coffee();
    expect(coffee.price()).toBe(120);
  });

  it('computes tea price', () => {
    const tea = new Tea();
    expect(tea.price()).toBe(150);
  });

  it('computes hot chocolate price', () => {
    const hotChocolate = new HotChocolate();
    expect(hotChocolate.price()).toBe(145);
  });

  it('computes tea with milk price', () => {
    const teaWithMilk = new WithMilk(new Tea());
    expect(teaWithMilk.price()).toBe(160);
  });

  it('computes coffee with milk price', () => {
    const coffeeWithMilk = new WithMilk(new Coffee());
    expect(coffeeWithMilk.price()).toBe(130);
  });

  it('computes coffee with milk and cream price', () => {
    const coffeeWithMilkAndCream = new WithCream(new WithMilk(new Coffee()));
    expect(coffeeWithMilkAndCream.price()).toBe(145);
  });

  it('computes hot chocolate with cream price', () => {
    const hotChocolateWithCream = new WithCream(new HotChocolate());
    expect(hotChocolateWithCream.price()).toBe(160);
  });

  it('computes hot chocolate with cinnamon price', () => {
    const hotChocolateWithCream = new WithCinnamon(new HotChocolate());
    expect(hotChocolateWithCream.price()).toBe(150);
  });

  it('computes hot chocolate with cinnamon and cream price', () => {
    const hotChocolateWithCream = new WithCream(
      new WithCinnamon(new HotChocolate()),
    );
    expect(hotChocolateWithCream.price()).toBe(165);
  });
});
