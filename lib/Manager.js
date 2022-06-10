// importing the Intern class
const Intern = require('./Intern');

// adding new perimeter and role to Manger class
class Manger extends Intern {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    adoptedRole(){
        return 'Manager';
    }

    adoptedOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manger;