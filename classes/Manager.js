const {Employee} = require('./Employee')

class Manager extends Employee {
    #employeesManaged = [];
    constructor(name, position, salary, department) {
        super(name, position, salary);
        this.department = department;
    }

   getEmployeesManaged() {
    return this.#employeesManaged;
   } 
  
   addEmployeeManaged(employee) {
    if (employee instanceof Employee) {
        this.#employeesManaged.push(employee);
    }else {
        throw new Error('Only employees can be managed')
    }
   }
}

module.exports = {
    Manager,
}