import { Coffee } from '@codely/Coffee';
import { CoffeeWithMilk } from '@codely/CoffeeWithMilk';
import { CoffeeWithMilkAndCream } from '@codely/CoffeeWithMilkAndCream';
import { HotChocolate } from '@codely/HotChocolate';
import { HotChocolateWithCream } from '@codely/HotChocolateWithCream';
import { Tea } from '@codely/Tea';
import { TeaWithMilk } from '@codely/TeaWithMilk';

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
    const teaWithMilk = new TeaWithMilk();
    expect(teaWithMilk.price()).toBe(160);
  });

  it('computes coffee with milk price', () => {
    const coffeeWithMilk = new CoffeeWithMilk();
    expect(coffeeWithMilk.price()).toBe(130);
  });

  it('computes coffee with milk and cream price', () => {
    const coffeeWithMilkAndCream = new CoffeeWithMilkAndCream();
    expect(coffeeWithMilkAndCream.price()).toBe(145);
  });

  it('computes hot chocolate with cream price', () => {
    const hotChocolateWithCream = new HotChocolateWithCream();
    expect(hotChocolateWithCream.price()).toBe(160);
  });
});
