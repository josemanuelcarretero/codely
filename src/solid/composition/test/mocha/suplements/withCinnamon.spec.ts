import { WithCinnamon } from '@codely/suplements/withCinnamon';
import { expect } from 'chai';

import { BeverageStub } from '../../stubs/beverageStub';

describe('WithCinnamon', () => {
  it('should create an instance', () => {
    expect(new WithCinnamon(new BeverageStub())).to.be.ok;
  });

  it('should have a price', () => {
    expect(new WithCinnamon(new BeverageStub()).price()).to.be.equal(105);
  });

  it('should be able to add more cinnamon', () => {
    expect(
      new WithCinnamon(new WithCinnamon(new BeverageStub())).price(),
    ).to.be.equal(110);
  });
});
