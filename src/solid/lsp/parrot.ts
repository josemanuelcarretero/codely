import Bird from '@codely/solid/lsp/bird';

export default class Parrot implements Bird {
  lastTweet: string;
  listenToTweet(tweet: string): void {
    this.lastTweet = tweet;
  }
  tweet(): void {
    if (!this.lastTweet) {
      console.log("I don't know what to tweet");
    }
    console.log(this.lastTweet);
  }
}
