// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const mrkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];
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
            name: 'install',
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
            name: 'usage',
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
)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
