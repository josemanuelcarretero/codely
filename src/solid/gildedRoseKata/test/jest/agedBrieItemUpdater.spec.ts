import { AgedBrieItemUpdater } from '@codely/agedBrieItemUpdater';
import { Item } from '@codely/item';

describe('Aged Brie Item', () => {
  it('should create an instance', () => {
    const itemUpdater = new AgedBrieItemUpdater(new Item('Aged Brie', 5, 1));

    expect(itemUpdater).toBeInstanceOf(AgedBrieItemUpdater);
  });

  it('should increase quality', () => {
    const item = new Item('Aged Brie', 5, 1);
    const itemUpdater = new AgedBrieItemUpdater(item);
    itemUpdater.update();
    expect(item.quality).toBe(2);
  });

  it('should never have quality greater than 50', () => {
    const item = new Item('Aged Brie', 5, 50);
    const itemUpdater = new AgedBrieItemUpdater(item);
    itemUpdater.update();
    expect(item.quality).toBe(50);
  });

  it('should increase quality 2 times when sellIn is passed', () => {
    const item = new Item('Aged Brie', 0, 1);
    const itemUpdater = new AgedBrieItemUpdater(item);
    itemUpdater.update();
    expect(item.quality).toBe(3);
  });
});
