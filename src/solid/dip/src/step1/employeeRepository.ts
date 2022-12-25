import Employee from '@codely/step1/employee';

export default interface EmployeeRepository {
  findEmployeesBornOn(monthDay: number): Employee[];
}
