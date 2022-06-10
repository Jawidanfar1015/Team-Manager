// importing the Employee class
const Employee = require('./Employee');

// adding role method and github perimeter to the Engineer class
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
    }

    adoptedRole(){
        return 'Engineer';
    }

    adoptedGithub() {
        return this.github;
    }
}

// exporting the Engineer class
module.exports = Engineer;