import { AbstractItemUpdaterFactory } from '@codely/abstractItemUpdaterFactory';
import { GildedRose } from '@codely/gildedRose';
import { Item } from '@codely/item';
import { ItemUpdater } from '@codely/itemUpdater';
import { expect, use } from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';

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

  use(sinonChai);

  const spyStubItemUpdater = sinon.spy(stubItemUpdater, 'update');
  const spyStubItemUpdaterFactory = sinon.spy(stubItemUpdaterFactory, 'create');

  const gildedRose = new GildedRose(stubItemUpdaterFactory);

  it('should create an instance', () => {
    expect(gildedRose).to.be.an.instanceOf(GildedRose);
  });

  it('should have no items', () => {
    const items = gildedRose.updateQuality();
    expect(items).to.have.lengthOf(0);
  });

  it('should call update method', () => {
    gildedRose.updateQuality([item]);
    expect(spyStubItemUpdater).to.have.been.calledOnce;
    expect(spyStubItemUpdaterFactory).to.have.been.calledWith(item);
    expect(spyStubItemUpdaterFactory).to.have.been.calledOnce;
    expect(spyStubItemUpdaterFactory).to.have.returned(stubItemUpdater);
  });
});
