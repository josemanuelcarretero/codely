import Animal from '@codely/step1/animal';

export default class Dog implements Animal {
  fly() {}
  run() {
    console.log('Dog is running');
  }
  bark() {
    console.log('Dog is barking');
  }
}
