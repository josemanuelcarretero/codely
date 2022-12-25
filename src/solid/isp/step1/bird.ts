import Animal from '@codely/solid/isp/step1/animal';

export default class Bird implements Animal {
  bark() {}
  run() {
    console.log('Bird is running');
  }
  fly() {
    console.log('Bird is flying');
  }
}
