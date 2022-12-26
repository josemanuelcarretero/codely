import { AbstractItemUpdaterFactory } from '@codely/abstractItemUpdaterFactory';
import { AgedBrieItemUpdater } from '@codely/agedBrieItemUpdater';
import { BackstagePassesItemUpdater } from '@codely/backstagePassesItemUpdater';
import { StandardItemUpdater } from '@codely/standardItemUpdater';
import { SulfurasItemUpdater } from '@codely/sulfurasItemUpdater';
import { Type } from '@codely/types';

export class ItemUpdaterFactory implements AbstractItemUpdaterFactory {
  create(item) {
    switch (item.name) {
      case Type.AGED_BRIE:
        return new AgedBrieItemUpdater(item);
      case Type.BACKSTAGE_PASSES:
        return new BackstagePassesItemUpdater(item);
      case Type.SULFURAS:
        return new SulfurasItemUpdater(item);
      default:
        return new StandardItemUpdater(item);
    }
  }
}
