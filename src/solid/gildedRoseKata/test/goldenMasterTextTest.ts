import { GildedRose } from '../src/gildedRose';
import { Item } from '../src/item';
import { ItemUpdaterFactory } from '../src/itemUpdaterFactory';

const items = [
  new Item('+5 Dexterity Vest', 10, 20), //
  new Item('Aged Brie', 2, 0), //
  new Item('Elixir of the Mongoose', 5, 7), //
  new Item('Sulfuras, Hand of Ragnaros', 0, 80), //
  new Item('Sulfuras, Hand of Ragnaros', -1, 80),
  new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
  new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
  new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
  // this conjured item does not work properly yet
  new Item('Conjured Mana Cake', 3, 6),
];

const itemUpdaterFactory = new ItemUpdaterFactory();
const gildedRose = new GildedRose(itemUpdaterFactory);

let days = 2;
if (process.argv.length > 2) {
  days = +process.argv[2];
}

for (let i = 0; i < days; i++) {
  console.log('-------- day ' + i + ' --------');
  console.log('name, sellIn, quality');
  items.forEach((element) => {
    console.log(element.toString());
  });
  console.log();
  gildedRose.updateQuality(items);
}
