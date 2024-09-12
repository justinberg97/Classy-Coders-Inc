const {Employee} = require('./Employee')

class SalesPerson extends Employee{
    #totalSales = [];
    constructor(name, position, salary) {
        super(name, position, salary);
        this.clients = [];
    }
getSalesNumbers() {
    return this.#totalSales;
}
makeSale(amount) {
    if (amount > 0 ) {
        this.#totalSales += amount;
    } else {
        throw new Error ('Sales must be greater than zero')
    }
}
    
}

module.exports = {
    SalesPerson,
}