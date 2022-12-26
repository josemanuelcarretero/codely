import { Item } from '@codely/item';
import { SulfurasItemUpdater } from '@codely/sulfurasItemUpdater';

describe('Sulfuras Item', () => {
  it('should create an instance', () => {
    const itemUpdater = new SulfurasItemUpdater(
      new Item('Sulfuras, Hand of Ragnaros', 0, 25),
    );
    expect(itemUpdater).toBeInstanceOf(SulfurasItemUpdater);
  });

  it('should never change', () => {
    const item = new Item('Sulfuras, Hand of Ragnaros', 0, 25);
    const itemUpdater = new SulfurasItemUpdater(item);
    itemUpdater.update();
    expect(item.quality).toBe(25);
    expect(item.sellIn).toBe(0);
  });
});
