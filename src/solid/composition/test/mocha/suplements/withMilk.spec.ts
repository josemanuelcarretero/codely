import { WithMilk } from '@codely/suplements/withMilk';
import { expect } from 'chai';

import { BeverageStub } from '../../stubs/beverageStub';

describe('WithMilk', () => {
  it('should create an instance', () => {
    expect(new WithMilk(new BeverageStub())).to.be.ok;
  });

  it('should have a price', () => {
    expect(new WithMilk(new BeverageStub()).price()).to.be.equal(110);
  });

  it('should be able to add more milk', () => {
    expect(new WithMilk(new WithMilk(new BeverageStub())).price()).to.be.equal(
      120,
    );
  });
});
