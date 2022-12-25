import Email from '@codely/dip/step2/email';

export default interface EmailSender {
  send(email: Email): void;
}
