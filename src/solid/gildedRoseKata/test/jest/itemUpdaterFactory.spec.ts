import { AgedBrieItemUpdater } from '@codely/agedBrieItemUpdater';
import { BackstagePassesItemUpdater } from '@codely/backstagePassesItemUpdater';
import { Item } from '@codely/item';
import { ItemUpdaterFactory } from '@codely/itemUpdaterFactory';
import { StandardItemUpdater } from '@codely/standardItemUpdater';
import { SulfurasItemUpdater } from '@codely/sulfurasItemUpdater';

describe('Item Updater Factory', () => {
  it('should create an instance', () => {
    const itemUpdaterFactory = new ItemUpdaterFactory();

    expect(itemUpdaterFactory).toBeInstanceOf(ItemUpdaterFactory);
  });

  it('should create an Aged Brie Item Updater', () => {
    const itemUpdaterFactory = new ItemUpdaterFactory();
    const item = new Item('Aged Brie', 5, 1);

    const itemUpdater = itemUpdaterFactory.create(item);

    expect(itemUpdater).toBeInstanceOf(AgedBrieItemUpdater);
  });

  it('should create an Backstage Passes Item Updater', () => {
    const itemUpdaterFactory = new ItemUpdaterFactory();
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 1);

    const itemUpdater = itemUpdaterFactory.create(item);

    expect(itemUpdater).toBeInstanceOf(BackstagePassesItemUpdater);
  });

  it('should create an Sulfuras Item Updater', () => {
    const itemUpdaterFactory = new ItemUpdaterFactory();
    const item = new Item('Sulfuras, Hand of Ragnaros', 5, 1);

    const itemUpdater = itemUpdaterFactory.create(item);

    expect(itemUpdater).toBeInstanceOf(SulfurasItemUpdater);
  });

  it('should create an Standard Item Updater', () => {
    const itemUpdaterFactory = new ItemUpdaterFactory();
    const item1 = new Item('whaterver', 5, 1);
    const item2 = new Item('172283748', 5, 1);

    const itemUpdater1 = itemUpdaterFactory.create(item1);
    const itemUpdater2 = itemUpdaterFactory.create(item2);

    expect(itemUpdater1).toBeInstanceOf(StandardItemUpdater);
    expect(itemUpdater2).toBeInstanceOf(StandardItemUpdater);
  });
});
