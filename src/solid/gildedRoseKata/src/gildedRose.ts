import { Item } from '@codely/item';
import { ItemUpdater } from '@codely/itemUpdater';

export class GildedRose {
  constructor(public items = [] as Array<Item>) {}

  updateQuality() {
    this.items.forEach((item) => {
      const itemUpdater = new ItemUpdater(item);
      itemUpdater.update();
      return item;
    });
    return this.items;
  }
}
