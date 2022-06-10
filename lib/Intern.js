// importing the Engineer class
const Engineer = require('./Engineer');

// adding the school perimeter to the Intern class
class Intern extends Engineer {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    }

    adoptedRole(){
        return 'Intern';
    }

    adoptedSchool(){
        return this.school;
    }

}

// exporting the Intern class
module.exports = Intern;