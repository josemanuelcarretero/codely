import { Item } from '@codely/item';

describe('Item', () => {
  it('should create an instance', () => {
    const item = new Item('foo', 0, 0);
    expect(item).toBeInstanceOf(Item);
  });

  it('should access to name', () => {
    const item = new Item('foo', 0, 0);
    expect(item.name).toBe('foo');
  });

  it('should access to sellIn', () => {
    const item = new Item('foo', 0, 0);
    expect(item.sellIn).toBe(0);
  });

  it('should access to quality', () => {
    const item = new Item('foo', 0, 0);
    expect(item.quality).toBe(0);
  });

  it('should return a string representation of the item when calling toString', () => {
    const item = new Item('foo', 0, 0);
    expect(item.toString()).toBe('foo, 0, 0');
  });
});
