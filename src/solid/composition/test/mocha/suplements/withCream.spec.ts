import { WithCream } from '@codely/suplements/withCream';
import { expect } from 'chai';

import { BeverageStub } from '../../stubs/beverageStub';

describe('WithCream', () => {
  it('should create an instance', () => {
    expect(new WithCream(new BeverageStub())).to.be.ok;
  });

  it('should have a price', () => {
    expect(new WithCream(new BeverageStub()).price()).to.be.equal(115);
  });

  it('should be able to add more cream', () => {
    expect(
      new WithCream(new WithCream(new BeverageStub())).price(),
    ).to.be.equal(130);
  });
});
