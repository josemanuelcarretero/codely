import { BackstagePassesItemUpdater } from '@codely/backstagePassesItemUpdater';
import { Item } from '@codely/item';

describe('Backstage Passes Item', () => {
  it('should create an instance', () => {
    const itemUpdater = new BackstagePassesItemUpdater(
      new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20),
    );
    expect(itemUpdater).toBeInstanceOf(BackstagePassesItemUpdater);
  });

  it('should increase quality by 1 if sellIn is greater than 10', () => {
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20);
    const itemUpdater = new BackstagePassesItemUpdater(item);
    itemUpdater.update();
    expect(item.quality).toBe(21);
  });

  it('should increase quality by 2 if sellIn is smaller than 10', () => {
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 6, 20);
    const itemUpdater = new BackstagePassesItemUpdater(item);
    itemUpdater.update();
    expect(item.quality).toBe(22);
  });

  it('should increase quality by 3 if sellIn is smaller than 5', () => {
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20);
    const itemUpdater = new BackstagePassesItemUpdater(item);
    itemUpdater.update();
    expect(item.quality).toBe(23);
  });

  it('should lose quality after sellIn passes', () => {
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20);
    const itemUpdater = new BackstagePassesItemUpdater(item);
    itemUpdater.update();
    expect(item.quality).toBe(0);
  });
});
