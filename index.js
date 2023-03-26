// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Enter a brief description of your project",
      name: "description",
    },
    {
      type: "input",
      message: "What are the installation instructions?",
      name: "installation",
    },
    {
      type: "input",
      message: "Provide usage inforation.",
      name: "usage",
    },
    {
      type: "input",
      message: "What are the contribution guidelines?",
      name: "contributing",
    },
    {
      type: "input",
      message: "What are the tests instructions?",
      name: "test",
    },
    {
      type: "list",
      maeesage: "What license do you want to add to your repository?",
      choices: ["MIT", "GPLv2", "Apache", "BSD"],
      name: "license",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "GitHub",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ])
  // TODO: Create a function to write README file
  .then((answers) => {
    const resultOfFunction = genericREADMEanswers(answers);
    fs.writeFile("README.md", resultOfFunction, (err) =>
      err
        ? console.log(err)
        : console.log("Your README file has been generated!")
    );
  });

const genericREADMEanswers = ({
  title,
  description,
  installation,
  usage,
  contributing,
  test,
  license,
  GitHub,
  email,
}) =>
  `# ${title}
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Description
${description}
    
## Installation
${installation}
  
## Usage
${usage}
  
## Contributing
${contributing}
  
## Tests
${test}
  
## Questions
For questions about this project, please see my GitHub at [${GitHub}](https://github.com/${GitHub}/). 
You can also reach me by email at ${email}.
  
## License
[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})
This project is licensed under the ${license} license.`;
