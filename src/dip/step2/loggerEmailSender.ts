import Email from '@codely/dip/step2/email';
import EmailSender from '@codely/dip/step2/emailSender';

export default class LoggerEmailSender implements EmailSender {
  public send(email: Email): void {
    console.log(
      `To:${email.getTo()}, Subject: ${email.getSubject()}, Message: ${email.getMessage()}`,
    );
  }
}
