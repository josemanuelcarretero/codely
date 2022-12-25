import Email from '@codely/step2/email';

export default interface EmailSender {
  send(email: Email): void;
}
