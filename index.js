// importing the npm packages
const inquirer = require('inquirer');
const fs = require('fs');

// importing the html template
const generateTeam = require('./src/template.js');

// importing classes
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// to push new members into
const newMember = [];

const questions = async () => {
    const answers = await inquirer
      .prompt([
        {
          type: "input",
          message: "What is your name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is your ID number?",
          name: "id",
        },
        {
          type: "input",
          message: "What is your email?",
          name: "email",
        },
        {
          type: "list",
          message: "What is your role?",
          name: "role",
          choices: ["Manager", "Engineer", "Intern"],
        },
      ])

    //   asking questions according to the role of employee
    // if Manager was selected
      if (answers.role === "Manager") {
        const managerAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is your office number",
              name: "officeNumber",
            },
          ])
          const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAns.officeNumber
          );
          newMember.push(newManager);
          
        // if engineer was selected
      } else if (answers.role === "Engineer") {
        const githubAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is your GitHub user name?",
              name: "github",
            }
          ])
            const newEngineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              githubAns.github
            );
            newMember.push(newEngineer);
          
        // if intern was selected
      } else if (answers.role === "Intern") {
        const internAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is your University name?",
              name: "school",
            },
          ])
          
          const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAns.school
          );
          newMember.push(newIntern);          
      } 
}

// if added a new member or create team
async function promptQuestions() {
    await questions()
      
    
    const addMemberAns = await inquirer
      .prompt([
        {
          name:'addMember',
          type: 'list',
          choices: ['Add a new member', 'Create team'],
          message: "Plese select one option to continue!"
        }
      ])
  
      if (addMemberAns.addMember === 'Add a new member') {
        return promptQuestions()
      }
      return createTeam();
  }  
  
  promptQuestions();
  
  function createTeam () {
    fs.writeFileSync(
      "./dist/index.html",
      generateTeam(newMember),
      "utf-8"
    );
  }