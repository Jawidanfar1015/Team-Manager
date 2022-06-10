// adding main perimeters and roles to the parent class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    adoptedName(){
        return this.name;
    }

    adoptedId(){
        return this.id;
    }

    adoptedEmail(){
        return this.email;
    }

    adoptedRole(){
        return 'Employee';
    }
}

// exporting the Employee class
module.exports = Employee;