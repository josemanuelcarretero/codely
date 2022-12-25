import Email from '@codely/step2/email';
import EmailSender from '@codely/step2/emailSender';

export default class LoggerEmailSender implements EmailSender {
  public send(email: Email): void {
    console.log(
      `To:${email.getTo()}, Subject: ${email.getSubject()}, Message: ${email.getMessage()}`,
    );
  }
}
