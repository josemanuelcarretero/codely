import Clock from '@codely/solid/dip/step2/clock';

export default class DateClock implements Clock {
  public monthDay(): number {
    return Date.now();
  }
}
