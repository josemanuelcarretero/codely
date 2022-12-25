import Employee from '@codely/step2/employee';

export default interface EmployeeRepository {
  findEmployeesBornOn(monthDay: number): Employee[];
}
