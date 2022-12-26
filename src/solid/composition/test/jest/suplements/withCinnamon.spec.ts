import { WithCinnamon } from '@codely/suplements/withCinnamon';

import { BeverageStub } from '../../stubs/beverageStub';

describe('WithCinnamon', () => {
  it('should create an instance', () => {
    expect(new WithCinnamon(new BeverageStub())).toBeTruthy();
  });

  it('should have a price', () => {
    expect(new WithCinnamon(new BeverageStub()).price()).toBe(105);
  });

  it('should be able to add more cinnamon', () => {
    expect(new WithCinnamon(new WithCinnamon(new BeverageStub())).price()).toBe(
      110,
    );
  });
});
