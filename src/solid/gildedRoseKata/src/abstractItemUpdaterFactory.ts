import { Item } from '@codely/item';
import { ItemUpdater } from '@codely/itemUpdater';

export interface AbstractItemUpdaterFactory {
  create(item: Item): ItemUpdater;
}
