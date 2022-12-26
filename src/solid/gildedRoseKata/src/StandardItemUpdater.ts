import { ItemUpdater } from '@codely/itemUpdater';

const THRESHOLD_ITEM_SELL_IN_TO_DECREASE_QUALITY = 0;

export class StandardItemUpdater extends ItemUpdater {
  update(): void {
    this.decreaseSellIn();
    this.updateQuality();
  }

  private updateQuality() {
    this.decreaseQuality();
    if (this.item.sellIn < THRESHOLD_ITEM_SELL_IN_TO_DECREASE_QUALITY) {
      this.decreaseQuality();
    }
  }
}
