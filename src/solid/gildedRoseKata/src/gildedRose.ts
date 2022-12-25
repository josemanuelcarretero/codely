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
      if (item.name != AGED_BRIE && item.name != BACKSTAGE_PASSES) {
        if (item.name != SULFURAS) {
          this.decreaseQuality(item);
        }
      } else {
        if (item.quality < 50) {
          this.increaseQuality(item);
          if (item.name == BACKSTAGE_PASSES) {
            if (item.sellIn < 11) {
              this.increaseQuality(item);
            }
            if (item.sellIn < 6) {
              this.increaseQuality(item);
            }
          }
        }
      }
      if (item.name != SULFURAS) {
        this.decreaseSellIn(item);
      }
      if (item.sellIn < 0) {
        if (item.name != AGED_BRIE) {
          if (item.name != BACKSTAGE_PASSES) {
            if (item.name != SULFURAS) {
              this.decreaseQuality(item);
            }
          } else {
            this.resetQuality(item);
          }
        } else {
          this.increaseQuality(item);
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
