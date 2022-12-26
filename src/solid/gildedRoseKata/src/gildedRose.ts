import { AgedBrieItemUpdater } from '@codely/AgedBrieItemUpdater';
import { BackstagePassesItemUpdater } from '@codely/BackstagePassesItemUpdater';
import { Item } from '@codely/item';
import { StandardItemUpdater } from '@codely/StandardItemUpdater';
import { SulfurasItemUpdater } from '@codely/SulfurasItemUpdater';

const AGED_BRIE = 'Aged Brie';
const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';

export class GildedRose {
  constructor(public items = [] as Array<Item>) {}

  updateQuality() {
    this.items.forEach((item) => this.getItemUpdater(item).update());
    return this.items;
  }

  private getItemUpdater(item: Item) {
    switch (item.name) {
      case AGED_BRIE:
        return new AgedBrieItemUpdater(item);
      case BACKSTAGE_PASSES:
        return new BackstagePassesItemUpdater(item);
      case SULFURAS:
        return new SulfurasItemUpdater(item);
      default:
        return new StandardItemUpdater(item);
    }
  }
}
