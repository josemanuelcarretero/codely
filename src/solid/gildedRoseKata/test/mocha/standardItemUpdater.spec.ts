import { Item } from '@codely/item';
import { StandardItemUpdater } from '@codely/standardItemUpdater';
import { expect } from 'chai';

describe('Standard Item', () => {
  it('should create an instance', () => {
    const itemUpdater = new StandardItemUpdater(
      new Item('Standard, Hand of Ragnaros', 0, 25),
    );
    expect(itemUpdater).to.be.an.instanceOf(StandardItemUpdater);
  });

  it('should decrease sellIn value', () => {
    const item = new Item('whatever', 10, 0);
    const itemUpdater = new StandardItemUpdater(item);
    itemUpdater.update();
    expect(item.sellIn).to.equal(9);
  });

  it('should decrease quality value', () => {
    const item = new Item('whatever', 1, 10);
    const itemUpdater = new StandardItemUpdater(item);
    itemUpdater.update();
    expect(item.quality).to.equal(9);
  });

  it('should decrease quality value twice as much when sellIn is passed', () => {
    const item = new Item('whatever', 0, 10);
    const itemUpdater = new StandardItemUpdater(item);
    itemUpdater.update();
    expect(item.quality).to.equal(8);
  });

  it('should never have negative quality', () => {
    const item = new Item('whatever', 0, 0);
    const itemUpdater = new StandardItemUpdater(item);
    itemUpdater.update();
    expect(item.quality).to.equal(0);
  });
});
