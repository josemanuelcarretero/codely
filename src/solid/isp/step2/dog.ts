import Barkable from '@codely/solid/isp/step2/barkable';
import Runnable from '@codely/solid/isp/step2/runnable';

export default class Dog implements Runnable, Barkable {
  run() {
    console.log('Dog is running');
  }
  bark() {
    console.log('Dog is barking');
  }
}
