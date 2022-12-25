import Employee from '@codely/solid/dip/step1/employee';

export default interface EmployeeRepository {
  findEmployeesBornOn(monthDay: number): Employee[];
}
