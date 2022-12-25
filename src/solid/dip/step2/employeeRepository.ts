import Employee from '@codely/solid/dip/step2/employee';

export default interface EmployeeRepository {
  findEmployeesBornOn(monthDay: number): Employee[];
}
