import { ItemUpdater } from '@codely/itemUpdater';

const THRESHOLD_ITEM_SELL_IN_TO_INCREASE_QUALITY_FIRST_TIME = 10;
const THRESHOLD_ITEM_SELL_IN_TO_INCREASE_QUALITY_SECOND_TIME = 5;
const THRESHOLD_ITEM_SELL_IN_TO_RESET_QUALITY = 0;

export class BackstagePassesItemUpdater extends ItemUpdater {
  update(): void {
    this.decreaseSellIn();
    this.updateQuality();
  }

  private updateQuality() {
    this.increaseQuality();
    if (
      this.item.sellIn < THRESHOLD_ITEM_SELL_IN_TO_INCREASE_QUALITY_FIRST_TIME
    ) {
      this.increaseQuality();
    }
    if (
      this.item.sellIn < THRESHOLD_ITEM_SELL_IN_TO_INCREASE_QUALITY_SECOND_TIME
    ) {
      this.increaseQuality();
    }
    if (this.item.sellIn < THRESHOLD_ITEM_SELL_IN_TO_RESET_QUALITY) {
      this.resetQuality();
    }
  }
}
