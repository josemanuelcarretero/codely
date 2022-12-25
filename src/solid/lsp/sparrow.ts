import Bird from '@codely/solid/lsp/bird';

export class Sparrow implements Bird {
  tweet(): void {
    console.log('Tweet tweet');
  }
}
