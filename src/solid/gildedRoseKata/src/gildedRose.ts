import { Item } from '@codely/item';

const AGED_BRIE = 'Aged Brie';
const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

const THRESHOLD_AGED_BRIE_ITEM_SELL_IN_TO_INCREASE_QUALITY_MIN_VALUE = 0;

const THRESHOLD_BACKSTAGE_PASSES_ITEM_SELL_IN_TO_INCREASE_QUALITY_FIRST_TIME_MIN_VALUE = 10;
const THRESHOLD_BACKSTAGE_PASSES_ITEM_SELL_IN_TO_INCREASE_QUALITY_SECOND_TIME_MIN_VALUE = 5;
const THRESHOLD_BACKSTAGE_PASSES_ITEM_SELL_IN_TO_RESET_QUALITY_MIN_VALUE = 0;

const THRESHOLD_DEFAULT_ITEM_SELL_IN_TO_DECREASE_QUALITY_MIN_VALUE = 0;

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
    if (item.quality < MAX_QUALITY) {
      item.quality = item.quality + 1;
    }
  }

  private decreaseQuality(item: Item) {
    if (item.quality > MIN_QUALITY) {
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
    if (
      item.sellIn <
      THRESHOLD_AGED_BRIE_ITEM_SELL_IN_TO_INCREASE_QUALITY_MIN_VALUE
    ) {
      this.increaseQuality(item);
    }
  }

  private updateQualityBackstagePasses(item: Item) {
    this.increaseQuality(item);
    if (
      item.sellIn <
      THRESHOLD_BACKSTAGE_PASSES_ITEM_SELL_IN_TO_INCREASE_QUALITY_FIRST_TIME_MIN_VALUE
    ) {
      this.increaseQuality(item);
    }
    if (
      item.sellIn <
      THRESHOLD_BACKSTAGE_PASSES_ITEM_SELL_IN_TO_INCREASE_QUALITY_SECOND_TIME_MIN_VALUE
    ) {
      this.increaseQuality(item);
    }
    if (
      item.sellIn <
      THRESHOLD_BACKSTAGE_PASSES_ITEM_SELL_IN_TO_RESET_QUALITY_MIN_VALUE
    ) {
      this.resetQuality(item);
    }
  }

  private updateQualityDefault(item: Item) {
    this.decreaseQuality(item);
    if (
      item.sellIn < THRESHOLD_DEFAULT_ITEM_SELL_IN_TO_DECREASE_QUALITY_MIN_VALUE
    ) {
      this.decreaseQuality(item);
    }
  }
}
