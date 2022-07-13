// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const mrkdown = require('generateMarkdown');

// TODO: Create an array of questions for user input
// All of my README questions. 

inquirer.prompt (
        [
            {
                type: 'input',
                message: "What's the projects title?",
                name:'title',
                // checks to make sure the user gave an input
                validate: (value) => {if(value) {return true} else {return "Please Input a value to continue."} },
            },
            {
                type: 'input',
                message: 'Brief description of your app',
                name: 'description',
                validate: (value) => {if(value) {return true} else {return "Please Input a value to continue."} },
             },
            {
                type: 'input',
                message: 'How will you install your app?',
                name: 'install',
                validate: (value) => {if(value) {return true} else {return "Please Input a value to continue."} },
            },
            {
                type: 'input',
                message: 'Any installation instructions to follow?',
                name: 'installtwo',
                validate: (value) => {if(value) {return true} else {return "Please Input a value to continue."} },
            },
            {
                type: 'input',
                message: 'how will you use your app?',
                name: 'usage',
                validate: (value) => {if(value) {return true} else {return "Please Input a value to continue."} },
            },
            {
                type: 'input',
                message: 'any contribution guidlines to be followed?',
                name: 'usagetwo',
                validate: (value) => {if(value) {return true} else {return "Please Input a value to continue."} },
            },
            {
                type: 'input',
                message: 'Any test instructions?',
                name: 'instructions',
                validate: (value) => {if(value) {return true} else {return "Please Input a value to continue."} },
            },
            {
                type: 'list',
                message: 'Which license did you use?',
                name: 'license',
                choices: ['Apache', 'Eclipse', 'GNU', 'MIT', 'Mozilla'],
                validate: (value) => {if(value) {return true} else {return "Please Input a value to continue."} },
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'username',
                validate: (value) => {if(value) {return true} else {return "Please Input a value to continue."} },
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
                validate: (value) => {if(value) {return true} else {return "Please Input a value to continue."} },
            }
        ]
    ) .then ((data) => {
        writeToFile(`${data.title}.md`, data)
    })

// TODO: Create a function to write README file
function readmeTemplate (data) {
   var template = [];
   template.push(
    `# Description`, `${data.description}`,
    `# Installation`, `${data.install}`, `${data.installtwo}`,
    `# Usage`, `${data.usage}`,
    `# Contributing`, `${data.usagetwo}`,
    `# Tests`, `${data.tests}`,
    `# License`,
    `# Questions`,
    `## Feel free to email me with questions, or drop by my GitHub`,
    `# GitHub: ${data.username}`,
    `# Email: ${data.email}`
   )
   return template.join('\n');

}
function writeToFile (fileName, data) {
    var README = readmeTemplate(data);
    fs.writeFile(`${fileName}`, README, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

