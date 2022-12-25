import Email from '@codely/solid/dip/step2/email';

export default interface EmailSender {
  send(email: Email): void;
}
