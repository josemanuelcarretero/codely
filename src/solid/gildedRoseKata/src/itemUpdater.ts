import { Item } from '@codely/item';

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

export abstract class ItemUpdater extends Item {
  constructor(protected readonly item: Item) {
    super(item.name, item.sellIn, item.quality);
  }

  abstract update(): void;

  protected increaseQuality() {
    if (this.item.quality < MAX_QUALITY) {
      this.item.quality = this.item.quality + 1;
    }
  }

  protected decreaseQuality() {
    if (this.item.quality > MIN_QUALITY) {
      this.item.quality = this.item.quality - 1;
    }
  }

  protected resetQuality() {
    this.item.quality = 0;
  }

  protected decreaseSellIn() {
    this.item.sellIn = this.item.sellIn - 1;
  }
}
