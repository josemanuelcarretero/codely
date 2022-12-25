import Clock from '@codely/step2/clock';

export default class DateClock implements Clock {
  public monthDay(): number {
    return Date.now();
  }
}
