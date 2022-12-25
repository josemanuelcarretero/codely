import Clock from '@codely/step1/clock';
import Email from '@codely/step1/email';
import EmailSender from '@codely/step1/emailSender';
import Employee from '@codely/step1/employee';
import EmployeeRepository from '@codely/step1/employeeRepository';

export default class BirthdayGreeter {
  constructor(
    private employeeRepository: EmployeeRepository,
    private clock: Clock,
  ) {}

  sendGreetings() {
    const today = this.clock.monthDay();
    this.employeeRepository.findEmployeesBornOn(today).forEach((employee) => {
      const email = this.emailFor(employee);
      new EmailSender().send(email);
    });
  }

  private emailFor(employee: Employee) {
    const message = `Happy birthday, dear ${employee.getFirstName()}!`;
    return new Email(employee.getEmail(), 'Happy birthday!', message);
  }
}
