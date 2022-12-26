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

export class ItemUpdater extends Item {
  constructor(private readonly item: Item) {
    super(item.name, item.sellIn, item.quality);
  }

  update() {
    switch (this.item.name) {
      case AGED_BRIE:
        this.decreaseSellIn();
        this.updateQualityAgedBrie();
        break;
      case BACKSTAGE_PASSES:
        this.decreaseSellIn();
        this.updateQualityBackstagePasses();
        break;
      case SULFURAS:
        break;
      default:
        this.decreaseSellIn();
        this.updateQualityDefault();
        break;
    }

    return this.item;
  }

  private increaseQuality() {
    if (this.item.quality < MAX_QUALITY) {
      this.item.quality = this.item.quality + 1;
    }
  }

  private decreaseQuality() {
    if (this.item.quality > MIN_QUALITY) {
      this.item.quality = this.item.quality - 1;
    }
  }

  private resetQuality() {
    this.item.quality = 0;
  }

  private decreaseSellIn() {
    this.item.sellIn = this.item.sellIn - 1;
  }

  private updateQualityAgedBrie() {
    this.increaseQuality();
    if (
      this.item.sellIn <
      THRESHOLD_AGED_BRIE_ITEM_SELL_IN_TO_INCREASE_QUALITY_MIN_VALUE
    ) {
      this.increaseQuality();
    }
  }

  private updateQualityBackstagePasses() {
    this.increaseQuality();
    if (
      this.item.sellIn <
      THRESHOLD_BACKSTAGE_PASSES_ITEM_SELL_IN_TO_INCREASE_QUALITY_FIRST_TIME_MIN_VALUE
    ) {
      this.increaseQuality();
    }
    if (
      this.item.sellIn <
      THRESHOLD_BACKSTAGE_PASSES_ITEM_SELL_IN_TO_INCREASE_QUALITY_SECOND_TIME_MIN_VALUE
    ) {
      this.increaseQuality();
    }
    if (
      this.item.sellIn <
      THRESHOLD_BACKSTAGE_PASSES_ITEM_SELL_IN_TO_RESET_QUALITY_MIN_VALUE
    ) {
      this.resetQuality();
    }
  }

  private updateQualityDefault() {
    this.decreaseQuality();
    if (
      this.item.sellIn <
      THRESHOLD_DEFAULT_ITEM_SELL_IN_TO_DECREASE_QUALITY_MIN_VALUE
    ) {
      this.decreaseQuality();
    }
  }
}
