import Flyable from '@codely/step2/flyable';
import Runnable from '@codely/step2/runnable';

export default class Bird implements Runnable, Flyable {
  run() {
    console.log('Bird is running');
  }
  fly() {
    console.log('Bird is flying');
  }
}
