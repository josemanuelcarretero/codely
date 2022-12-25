export default class Employee {
  constructor(
    private readonly firstName: string,
    private readonly lastName: string,
    private readonly dateOfBirth: Date,
    private readonly email: string,
  ) {}

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getDateOfBirth(): Date {
    return this.dateOfBirth;
  }

  public getEmail(): string {
    return this.email;
  }
}
