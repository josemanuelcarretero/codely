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
          this.decreaseSellIn(item);
          this.updateQualityAgedBrie(item);
          break;
        case BACKSTAGE_PASSES:
          this.decreaseSellIn(item);
          this.updateQualityBackstagePasses(item);
          break;
        case SULFURAS:
          break;
        default:
          this.decreaseSellIn(item);
          this.updateQualityDefault(item);
          break;
      }
    });

    return this.items;
  }

  private increaseQuality(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  private decreaseQuality(item: Item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
  }

  private resetQuality(item: Item) {
    item.quality = 0;
  }

  private decreaseSellIn(item: Item) {
    item.sellIn = item.sellIn - 1;
  }

  private updateQualityAgedBrie(item: Item) {
    this.increaseQuality(item);
    if (item.sellIn < 0) {
      this.increaseQuality(item);
    }
  }

  private updateQualityBackstagePasses(item: Item) {
    this.increaseQuality(item);
    if (item.sellIn < 10) {
      this.increaseQuality(item);
    }
    if (item.sellIn < 5) {
      this.increaseQuality(item);
    }
    if (item.sellIn < 0) {
      this.resetQuality(item);
    }
  }

  private updateQualityDefault(item: Item) {
    this.decreaseQuality(item);
    if (item.sellIn < 0) {
      this.decreaseQuality(item);
    }
  }
}
