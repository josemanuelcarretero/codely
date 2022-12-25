import Clock from '@codely/dip/step2/clock';

export default class DateClock implements Clock {
  public monthDay(): number {
    return Date.now();
  }
}
