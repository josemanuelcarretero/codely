import { Item } from '@codely/item';
import { expect } from 'chai';

describe('Item', () => {
  it('should create an instance', () => {
    const item = new Item('foo', 0, 0);
    expect(item).to.be.an.instanceOf(Item);
  });

  it('should access to name', () => {
    const item = new Item('foo', 0, 0);
    expect(item.name).to.equal('foo');
  });

  it('should access to sellIn', () => {
    const item = new Item('foo', 0, 0);
    expect(item.sellIn).to.equal(0);
  });

  it('should access to quality', () => {
    const item = new Item('foo', 0, 0);
    expect(item.quality).to.equal(0);
  });

  it('should return a string representation of the item when calling toString', () => {
    const item = new Item('foo', 0, 0);
    expect(item.toString()).to.equal('foo, 0, 0');
  });
});
