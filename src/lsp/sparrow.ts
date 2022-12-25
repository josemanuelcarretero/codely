import Bird from '@codely/lsp/bird';

export class Sparrow implements Bird {
  tweet(): void {
    console.log('Tweet tweet');
  }
}
