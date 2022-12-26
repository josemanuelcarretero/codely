import { AbstractItemUpdaterFactory } from '@codely/abstractItemUpdaterFactory';
import { Item } from '@codely/item';

export class GildedRose {
  constructor(private itemUpdaterGenerator: AbstractItemUpdaterFactory) {}

  updateQuality(items = [] as Array<Item>) {
    items.forEach((item) => this.itemUpdaterGenerator.create(item).update());
    return items;
  }
}
