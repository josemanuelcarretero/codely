import Clock from '@codely/step2/clock';
import Email from '@codely/step2/email';
import EmailSender from '@codely/step2/emailSender';
import Employee from '@codely/step2/employee';
import EmployeeRepository from '@codely/step2/employeeRepository';

export default class BirthdayGreeter {
  constructor(
    private employeeRepository: EmployeeRepository,
    private emailSender: EmailSender,
    private clock: Clock,
  ) {}

  sendGreetings() {
    const today = this.clock.monthDay();
    this.employeeRepository.findEmployeesBornOn(today).forEach((employee) => {
      const email = this.emailFor(employee);
      this.emailSender.send(email);
    });
  }

  private emailFor(employee: Employee) {
    const message = `Happy birthday, dear ${employee.getFirstName()}!`;
    return new Email(employee.getEmail(), 'Happy birthday!', message);
  }
}
