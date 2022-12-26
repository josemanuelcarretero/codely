import { WithCream } from '@codely/suplements/withCream';

import { BeverageStub } from '../../stubs/beverageStub';

describe('WithCream', () => {
  it('should create an instance', () => {
    expect(new WithCream(new BeverageStub())).toBeTruthy();
  });

  it('should have a price', () => {
    expect(new WithCream(new BeverageStub()).price()).toBe(115);
  });

  it('should be able to add more cream', () => {
    expect(new WithCream(new WithCream(new BeverageStub())).price()).toBe(130);
  });
});
