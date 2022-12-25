export default class Email {
  constructor(
    private readonly to: string,
    private readonly subject: string,
    private readonly message: string,
  ) {}

  public getTo(): string {
    return this.to;
  }

  public getSubject(): string {
    return this.subject;
  }

  public getMessage(): string {
    return this.message;
  }
}
