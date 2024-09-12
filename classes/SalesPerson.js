const {Employee} = require('./Employee')

class SalesPerson extends Employee{
    #clients = [];
    #totalSales = 0;
    constructor(name, position, salary) {
        super(name, position, salary);
    }
getSalesNumber() {
    return this.#totalSales;
}
makeSale(amount) {
    if (typeof amount === 'number' && amount >0 ) {
        this.#totalSales += amount;
    } else {
        throw new Error ('Sales must be greater than zero')
    }
}
    
}

module.exports = {
    SalesPerson,
}