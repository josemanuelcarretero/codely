import { Item } from '@codely/item';

const AGED_BRIE = 'Aged Brie';
const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      switch (item.name) {
        case AGED_BRIE:
          this.increaseQuality(item);
          this.decreaseSellIn(item);
          if (item.sellIn < 0) {
            this.increaseQuality(item);
          }
          break;
        case BACKSTAGE_PASSES:
          this.increaseQuality(item);
          if (item.sellIn < 11) {
            this.increaseQuality(item);
          }
          if (item.sellIn < 6) {
            this.increaseQuality(item);
          }
          this.decreaseSellIn(item);
          if (item.sellIn < 0) {
            this.resetQuality(item);
          }
          break;
        case SULFURAS:
          break;
        default:
          this.decreaseQuality(item);
          this.decreaseSellIn(item);
          if (item.sellIn < 0) {
            this.decreaseQuality(item);
          }
      }
    });

    return this.items;
  }

  increaseQuality(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  decreaseQuality(item: Item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
  }

  resetQuality(item: Item) {
    item.quality = 0;
  }

  decreaseSellIn(item: Item) {
    item.sellIn = item.sellIn - 1;
  }
}
