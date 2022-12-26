import { WithMilk } from '@codely/suplements/withMilk';

import { BeverageStub } from '../../stubs/beverageStub';

describe('WithMilk', () => {
  it('should create an instance', () => {
    expect(new WithMilk(new BeverageStub())).toBeTruthy();
  });

  it('should have a price', () => {
    expect(new WithMilk(new BeverageStub()).price()).toBe(110);
  });

  it('should be able to add more milk', () => {
    expect(new WithMilk(new WithMilk(new BeverageStub())).price()).toBe(120);
  });
});
