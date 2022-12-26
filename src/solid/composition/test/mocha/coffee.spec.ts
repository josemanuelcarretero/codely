import { Coffee } from '@codely/coffee';
import { expect } from 'chai';

describe('Coffee', () => {
  it('should create an instance', () => {
    expect(new Coffee()).to.be.ok;
  });

  it('should have a price', () => {
    expect(new Coffee().price()).to.be.equal(120);
  });
});
