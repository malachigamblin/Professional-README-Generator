// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of the repository?",
      name: "title",
    },
    {
      type: "input",
      message:
        "Provide a short description explaining the what, why, and how of your project.",
      name: "description",
    },
    {
      type: "input",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
      name: "installation",
    },
    {
      type: "input",
      message:
        "Provide instructions and examples for use. Include screenshots as needed.",
      name: "usage",
    },
    {
      type: "input",
      message:
        "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.",
      name: "contribute",
    },
    {
      type: "input",
      message: "Provide examples on how to run tests.",
      name: "test",
    },
    {
      type: "list",
      maeesage: "What license do you want to add to your repository?",
      choices: ["MIT", "GPLv2", "Apache"],
      name: "license",
    },
    {
      type: "input",
      message:
        "Provide your GitHub username for any user that may have a question.",
      name: "GitHub",
    },
    {
      type: "input",
      message: "Provide your e-mail for any user that may have a question.",
      name: "email",
    },
    // 2. process the answers
  ])
  // TODO: Create a function to write README file
  .then((answers) => {
    const resultOfFunction = genericREADMEanswers(answers);
    fs.writeFile("README.md", resultOfFunction, (err) =>
      err
        ? console.log(err)
        : console.log("Your README file has been generated!")
    );
  })
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
