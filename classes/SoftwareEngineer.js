const {Employee} = require('./Employee')

class SoftwareEngineer extends Employee{
    #programmingLanguages = [];
    constructor(name, position, salary) {
        super(name, position, salary);
    }
getProgrammingLanguages() {
    return this.#programmingLanguages;
}
setProgrammingLanguage(language) {
    if (!this.#programmingLanguages.includes(language)) {
        this.#programmingLanguages.push(language)
    }
}
    
}
module.exports = {
    SoftwareEngineer,
}