import { Tea } from '@codely/tea';

describe('Tea', () => {
  it('should create an instance', () => {
    expect(new Tea()).toBeTruthy();
  });

  it('should have a price', () => {
    expect(new Tea().price()).toBe(150);
  });
});
