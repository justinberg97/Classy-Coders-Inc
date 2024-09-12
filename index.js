const { Employee } = require("./classes/Employee")
const { Manager } = require("./classes/Manager")
const { SalesPerson } = require("./classes/SalesPerson")
const { SoftwareEngineer } = require("./classes/SoftwareEngineer")

// const employee = new Employee("Justin", "Manager", 1000);
// console.log(employee)
// const softwareEngineer = new SoftwareEngineer('Alice Johnson', 'Software Engineer', 7000)

// console.log(softwareEngineer.getStatus())






module.exports = {
    Employee,
    Manager,
    SalesPerson,
    SoftwareEngineer
}
