import Barkable from '@codely/step2/barkable';
import Runnable from '@codely/step2/runnable';

export default class Dog implements Runnable, Barkable {
  run() {
    console.log('Dog is running');
  }
  bark() {
    console.log('Dog is barking');
  }
}
