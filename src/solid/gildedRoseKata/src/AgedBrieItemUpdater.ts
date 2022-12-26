import { ItemUpdater } from '@codely/itemUpdater';

const THRESHOLD_ITEM_SELL_IN_TO_INCREASE_QUALITY = 0;

export class AgedBrieItemUpdater extends ItemUpdater {
  update(): void {
    this.decreaseSellIn();
    this.updateQuality();
  }

  private updateQuality() {
    this.increaseQuality();
    if (this.item.sellIn < THRESHOLD_ITEM_SELL_IN_TO_INCREASE_QUALITY) {
      this.increaseQuality();
    }
  }
}
