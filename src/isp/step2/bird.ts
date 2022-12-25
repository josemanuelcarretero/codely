import Flyable from '@codely/isp/step2/flyable';
import Runnable from '@codely/isp/step2/runnable';

export default class Bird implements Runnable, Flyable {
  run() {
    console.log('Bird is running');
  }
  fly() {
    console.log('Bird is flying');
  }
}
