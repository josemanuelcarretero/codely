import { Coffee } from '@codely/coffee';

describe('Coffee', () => {
  it('should create an instance', () => {
    expect(new Coffee()).toBeTruthy();
  });

  it('should have a price', () => {
    expect(new Coffee().price()).toBe(120);
  });
});
