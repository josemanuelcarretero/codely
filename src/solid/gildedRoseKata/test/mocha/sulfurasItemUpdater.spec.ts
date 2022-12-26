import { Item } from '@codely/item';
import { SulfurasItemUpdater } from '@codely/sulfurasItemUpdater';
import { expect } from 'chai';

describe('Sulfuras Item', () => {
  it('should create an instance', () => {
    const itemUpdater = new SulfurasItemUpdater(
      new Item('Sulfuras, Hand of Ragnaros', 0, 25),
    );
    expect(itemUpdater).to.be.an.instanceOf(SulfurasItemUpdater);
  });

  it('should never change', () => {
    const item = new Item('Sulfuras, Hand of Ragnaros', 0, 25);
    const itemUpdater = new SulfurasItemUpdater(item);
    itemUpdater.update();
    expect(item.quality).to.equal(25);
    expect(item.sellIn).to.equal(0);
  });
});
