import { HotChocolate } from '@codely/hotChocolate';

describe('HotChocolate', () => {
  it('should create an instance', () => {
    expect(new HotChocolate()).toBeTruthy();
  });

  it('should have a price', () => {
    expect(new HotChocolate().price()).toBe(145);
  });
});
