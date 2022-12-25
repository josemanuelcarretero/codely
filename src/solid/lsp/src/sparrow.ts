import Bird from '@codely/bird';

export class Sparrow implements Bird {
  tweet(): void {
    console.log('Tweet tweet');
  }
}
