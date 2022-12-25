import { GildedRose, Item } from '@codely/gildedRose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  it('should decrease sellIn value', () => {
    const gildedRose = new GildedRose([new Item('whatever', 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
  });

  it('should decrease quality value', () => {
    const gildedRose = new GildedRose([new Item('whatever', 1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
  });

  it('should decrease quality value twice as much when sellIn is passed', () => {
    const gildedRose = new GildedRose([new Item('whatever', 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });

  it('should never have negative quality', () => {
    const gildedRose = new GildedRose([new Item('whatever', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it('should increase quality of Aged Brie', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 5, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });

  it('should never have quality greater than 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 5, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it('should never change Sulfuras', () => {
    const gildedRose = new GildedRose([
      new Item('Sulfuras, Hand of Ragnaros', 0, 25),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(25);
    expect(items[0].sellIn).toBe(0);
  });

  it('should increase quality of Backstage Passes by 1 if sellIn is greater than 10', () => {
    const gildedRose = new GildedRose([
      new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
  });

  it('should increase quality of Backstage Passes by 2 if sellIn is smaller than 10', () => {
    const gildedRose = new GildedRose([
      new Item('Backstage passes to a TAFKAL80ETC concert', 6, 20),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(22);
  });

  it('should increase quality of Backstage Passes by 3 if sellIn is smaller than 5', () => {
    const gildedRose = new GildedRose([
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(23);
  });

  it('should lose quality of Backstage Passes after sellIn passes', () => {
    const gildedRose = new GildedRose([
      new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});
