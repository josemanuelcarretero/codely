import Employee from '@codely/dip/step1/employee';

export default interface EmployeeRepository {
  findEmployeesBornOn(monthDay: number): Employee[];
}
