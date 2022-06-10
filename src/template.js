// create the team in html
const generateTeam = (team) => {
    // create the manager card in html file
    const generateManager = (manager) => {
      return `
          <div class="card employee-card">
          <div class="card-header">
              <h2 class="card-title">${manager.adoptedName()}</h2>
              <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.adoptedRole()}</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${manager.adoptedId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${manager.adoptedEmail()}">${manager.adoptedEmail()}</a></li>
                  <li class="list-group-item">Office number: ${manager.adoptedOfficeNumber()}</li>
              </ul>
          </div>
      </div>
          `;
    };
  
    // create the engineer card in html
    const generateEngineer = (engineer) => {
      return `
          <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${engineer.adoptedName()}</h2>
          <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.adoptedRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${engineer.adoptedId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.adoptdEmail()}">${engineer.adoptedEmail()}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.adoptedGithub()}" target="_blank" rel="noopener noreferrer">${engineer.adoptedGithub()}</a></li>
          </ul>
      </div>
  </div>
          `;
    };
  
    // create the intern card in html
    const generateIntern = (intern) => {
      return `
          <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${intern.adoptedName()}</h2>
          <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.adoptedRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${intern.adoptedId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.adoptedEmail()}">${intern.adoptedEmail()}</a></li>
              <li class="list-group-item">School: ${intern.adoptedSchool()}</li>
          </ul>
      </div>
  </div>
          `;
    };
  
    const html = [];
  
    html.push(
      team
        .filter((employee) => employee.adoptedRole() === "Manager")
        .map((manager) => generateManager(manager))
    );
    html.push(
      team
        .filter((employee) => employee.adoptedRole() === "Engineer")
        .map((engineer) => generateEngineer(engineer))
        .join("")
    );
    html.push(
      team
        .filter((employee) => employee.adoptedRole() === "Intern")
        .map((intern) => generateIntern(intern))
        .join("")
    );
  
    return html.join("");
  };
  
  // export function to generate entire page
  module.exports = (team) => {
    return `
      <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="team-area col-12 d-flex justify-content-center">
                  ${generateTeam(team)}
              </div>
          </div>
      </div>
  </body>
  </html>
      `;
  };
  