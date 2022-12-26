import { Item } from '@codely/item';
import { ItemUpdater } from '@codely/itemUpdater';
import { expect } from 'chai';

describe('Item Updater', () => {
  class StubItemUpdater extends ItemUpdater {
    update(): void {}
    testIncreaseQuality() {
      this.increaseQuality();
    }
    testDecreaseQuality() {
      this.decreaseQuality();
    }
    testResetQuality() {
      this.resetQuality();
    }
    testDecreaseSellIn() {
      this.decreaseSellIn();
    }
  }
  it("shouldn't create an instance directly", () => {
    expect(ItemUpdater.prototype.update).to.be.undefined;
    expect(StubItemUpdater.prototype.update).to.be.not.undefined;

    const itemUpdater: ItemUpdater = new StubItemUpdater(
      new Item('whatever', 0, 0),
    );
    expect(itemUpdater).to.be.an.instanceOf(ItemUpdater);
    expect(() => itemUpdater.update()).not.to.throw();
  });

  it('should increase quality', () => {
    const item = new Item('whatever', 0, 0);
    const itemUpdater = new StubItemUpdater(item);
    itemUpdater.testIncreaseQuality();
    expect(item.quality).to.equal(1);
  });

  it('should decrease quality', () => {
    const item = new Item('whatever', 0, 1);
    const itemUpdater = new StubItemUpdater(item);
    itemUpdater.testDecreaseQuality();
    expect(item.quality).to.equal(0);
  });

  it('should reset quality', () => {
    const item = new Item('whatever', 0, 25);
    const itemUpdater = new StubItemUpdater(item);
    itemUpdater.testResetQuality();
    expect(item.quality).to.equal(0);
  });

  it('should decrease sellIn', () => {
    const item = new Item('whatever', 10, 0);
    const itemUpdater = new StubItemUpdater(item);
    itemUpdater.testDecreaseSellIn();
    expect(item.sellIn).to.equal(9);
  });

  it('should never have negative quality', () => {
    const item = new Item('whatever', 0, 0);
    const itemUpdater = new StubItemUpdater(item);
    itemUpdater.testDecreaseQuality();
    expect(item.quality).to.equal(0);
  });

  it('should never have quality greater than 50', () => {
    const item = new Item('whatever', 0, 50);
    const itemUpdater = new StubItemUpdater(item);
    itemUpdater.testIncreaseQuality();
    expect(item.quality).to.equal(50);
  });
});
