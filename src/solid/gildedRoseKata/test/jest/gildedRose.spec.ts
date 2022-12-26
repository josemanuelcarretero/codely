import { AbstractItemUpdaterFactory } from '@codely/abstractItemUpdaterFactory';
import { GildedRose } from '@codely/gildedRose';
import { Item } from '@codely/item';
import { ItemUpdater } from '@codely/itemUpdater';

describe('Gilded Rose', () => {
  class StubItemUpdater extends ItemUpdater {
    update(): void {}
  }
  const item = new Item('whatever', 10, 25);
  const stubItemUpdater: ItemUpdater = new StubItemUpdater(item);
  class StubItemUpdaterFactory implements AbstractItemUpdaterFactory {
    create(): ItemUpdater {
      return stubItemUpdater;
    }
  }
  const stubItemUpdaterFactory = new StubItemUpdaterFactory();
  jest.spyOn(stubItemUpdater, 'update');
  jest.spyOn(stubItemUpdaterFactory, 'create');

  const gildedRose = new GildedRose(stubItemUpdaterFactory);

  it('should create an instance', () => {
    expect(gildedRose).toBeInstanceOf(GildedRose);
  });

  it('should have no items', () => {
    const items = gildedRose.updateQuality();
    expect(items).toHaveLength(0);
  });

  it('should call update method', () => {
    gildedRose.updateQuality([item]);
    expect(stubItemUpdater.update).toHaveBeenCalledTimes(1);
    expect(stubItemUpdaterFactory.create).toHaveBeenCalledWith(item);
    expect(stubItemUpdaterFactory.create).toHaveBeenCalledTimes(1);
    expect(stubItemUpdaterFactory.create).toHaveReturnedWith(stubItemUpdater);
  });
});
