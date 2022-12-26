import { HotChocolate } from '@codely/hotChocolate';
import { expect } from 'chai';

describe('HotChocolate', () => {
  it('should create an instance', () => {
    expect(new HotChocolate()).to.be.ok;
  });

  it('should have a price', () => {
    expect(new HotChocolate().price()).to.be.equal(145);
  });
});
