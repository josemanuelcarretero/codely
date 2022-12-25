import Email from '@codely/dip/step1/email';

export default class EmailSender {
  public send(email: Email): void {
    console.log(
      `To:${email.getTo()}, Subject: ${email.getSubject()}, Message: ${email.getMessage()}`,
    );
  }
}
