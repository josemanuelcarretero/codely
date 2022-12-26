import { Tea } from '@codely/tea';
import { expect } from 'chai';

describe('Tea', () => {
  it('should create an instance', () => {
    expect(new Tea()).to.be.ok;
  });

  it('should have a price', () => {
    expect(new Tea().price()).to.be.equal(150);
  });
});
